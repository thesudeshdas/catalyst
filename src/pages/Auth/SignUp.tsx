import * as React from 'react';
import {
  Box,
  Button,
  Center,
  chakra,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Spacer,
  Image,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FormSignUp } from '../../components';
// import { FormSignUp } from '../../../components';

export default function PageSignUp() {
  return (
    <Flex>
      <Image
        src='https://images.unsplash.com/photo-1529336953128-a85760f58cb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        objectFit='cover'
        w='40%'
        h='100vh'
      />

      <Center w='60%'>
        <Box w='30rem'>
          <Text position='absolute' top='2rem' right='2rem'>
            Already a member? <Link to='/sign-in'>Sign in</Link>
          </Text>
          <Heading>Sign up to Catalyst</Heading>
          <Button my={6} colorScheme='blue'>
            Sign up with Google
          </Button>

          <Flex w='100%' alignItems='center' gap='1rem'>
            <Divider
              borderColor='gray.800'
              borderWidth='1px'
              borderRadius='1rem'
            />
            <Text>Or</Text>
            <Divider
              borderColor='gray.800'
              borderWidth='1px'
              borderRadius='1rem'
            />
          </Flex>

          <FormSignUp />
        </Box>
      </Center>
    </Flex>
  );
}
