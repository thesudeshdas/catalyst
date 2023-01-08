import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  Text,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { signinWithCredentials } from '../../features/auth/authActions';
import { Navigate, useNavigate } from 'react-router-dom';

const pwdRegex =
  /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const SigninSchema = Yup.object().shape({
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

export default function FormSignIn() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const authErrors = useAppSelector((state) => state.auth.errors);

  const handleSignin = async (values) => {
    const response = await dispatch(signinWithCredentials(values));

    if (response.meta.requestStatus === 'fulfilled') {
      localStorage.setItem(
        'localUser',
        JSON.stringify({
          email: response.payload.email,
          name: response.payload.name,
          _id: response.payload._id,
        })
      );

      localStorage.setItem(
        'localStatus',
        JSON.stringify({ signInStatus: true })
      );

      navigate('/');
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={SigninSchema}
      onSubmit={(values, actions) => {
        handleSignin(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name='email'>
            {({ field, form }) => (
              <FormControl
                my={6}
                isInvalid={Boolean(errors.email) || Boolean(authErrors?.email)}
              >
                <FormLabel>Username or Email address</FormLabel>
                <Input {...field} />
                {(errors.email && touched.email) || authErrors?.email ? (
                  <FormErrorMessage>
                    {errors.email || authErrors.email}
                  </FormErrorMessage>
                ) : null}
              </FormControl>
            )}
          </Field>

          <Field name='password'>
            {({ field, form }) => (
              <FormControl
                isInvalid={
                  Boolean(errors.password) || Boolean(authErrors?.password)
                }
              >
                <FormLabel display='flex' justifyContent='space-between' mr={0}>
                  <Text>Password</Text>
                  <Link href='/auth/forgot-password'>Forgot password?</Link>
                </FormLabel>
                <Input {...field} type='password' placeholder='6+ characters' />
                {(errors.password && touched.password) ||
                authErrors?.password ? (
                  <FormErrorMessage>
                    {errors.password || authErrors.password}
                  </FormErrorMessage>
                ) : null}
              </FormControl>
            )}
          </Field>

          <Button variant='primary' mt={6} colorScheme='blue' type='submit'>
            Sign in
          </Button>
        </Form>
      )}
    </Formik>
  );
}
