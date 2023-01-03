import React from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { registerUser } from '../../features/auth/authActions';
import { useNavigate } from 'react-router-dom';

const pwdRegex =
  /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters long')
    .max(32, 'Name must be at max 32 characters')
    .required('Please provide your name'),
  username: Yup.string()
    .min(2, 'Username must be at least 2 characters long')
    .max(16, 'Username must be at max 16 characters')
    .required('Please provide your username'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please provide your email'),
  password: Yup.string()
    .matches(
      pwdRegex,
      'Password must contain minimum 8 characters, at least one letter, one number and one special character.'
    )
    .required('Please provide your password'),
});

export default function FormSignUp() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userErrors = useAppSelector((state) => state.auth['errors']);

  const handleSignup = async (values) => {
    const response = await dispatch(registerUser(values));

    if (response.meta.requestStatus === 'fulfilled') {
      navigate('/sign-in');
    }
  };

  return (
    <Formik
      initialValues={{ name: '', username: '', email: '', password: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        handleSignup(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Flex gap={6} mt={6}>
            <Field name='name'>
              {({ field, form }) => (
                <FormControl isInvalid={Boolean(errors.name)}>
                  <FormLabel>Name</FormLabel>
                  <Input {...field} />
                  {errors.name && touched.name ? (
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  ) : null}
                </FormControl>
              )}
            </Field>

            <Field name='username'>
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    Boolean(errors.username) || Boolean(userErrors?.username)
                  }
                >
                  <FormLabel>Username</FormLabel>
                  <Input {...field} />
                  {(errors.username && touched.username) ||
                  userErrors?.username ? (
                    <FormErrorMessage>
                      {errors.username || userErrors.username}
                    </FormErrorMessage>
                  ) : null}
                </FormControl>
              )}
            </Field>
          </Flex>

          <Field name='email'>
            {({ field, form }) => (
              <FormControl
                my={6}
                isInvalid={Boolean(errors.email) || Boolean(userErrors?.email)}
              >
                <FormLabel>Email address</FormLabel>
                <Input {...field} />
                {(errors.email && touched.email) || userErrors?.email ? (
                  <FormErrorMessage>
                    {errors.email || userErrors.email}
                  </FormErrorMessage>
                ) : null}
              </FormControl>
            )}
          </Field>

          <Field name='password'>
            {({ field, form }) => (
              <FormControl isInvalid={Boolean(errors.password)}>
                <FormLabel>Password</FormLabel>
                <Input {...field} type='password' placeholder='6+ characters' />
                {errors.password && touched.password ? (
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                ) : null}
              </FormControl>
            )}
          </Field>

          <Button mt={6} colorScheme='blue' type='submit'>
            Sign up
          </Button>
        </Form>
      )}
    </Formik>
  );
}
