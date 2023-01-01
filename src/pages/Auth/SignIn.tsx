import * as React from 'react';
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function PageSignIn() {
  const handleSignIn = async () => {
    window.open(`${process.env.REACT_APP_AUTH_URL}/google`, '_self');
  };

  const handleSignOut = async () => {
    window.open(`${process.env.REACT_APP_AUTH_URL}/logout`, '_self');
  };

  return (
    <Flex>
      <Image
        src='https://images.unsplash.com/photo-1632245889029-e406faaa34cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
        alt='porsche'
        objectFit='cover'
        w='40%'
        h='100vh'
      />

      <Center w='60%'>
        <Box w='30rem'>
          <Text position='absolute' top='2rem' right='2rem'>
            Not a member? <Link to='/auth/signup'>Sign up now</Link>
          </Text>
          <Heading>Sign in to Catalyst</Heading>
          <Button my={6} colorScheme='blue' onClick={handleSignIn}>
            Sign in with Google
          </Button>

          <Button my={6} colorScheme='blue' onClick={handleSignOut}>
            Logout
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

          {/* <FormSignIn /> */}
        </Box>
      </Center>
    </Flex>
  );
}
