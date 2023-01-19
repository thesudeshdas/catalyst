import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FormSignUp } from '../../components';

import useDocumentTitle from '../../lib/hooks/useDocumentTitle';

export default function PageSignUp() {
  useDocumentTitle('Catalyst | Sign Up');

  return (
    <Flex alignItems='center' justifyContent='center' h='100vh'>
      <Image
        display={{ base: 'none', md: 'block' }}
        src='https://images.unsplash.com/photo-1529336953128-a85760f58cb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        objectFit='cover'
        w='40%'
        h='100vh'
      />

      <Stack w={{ base: '70%', md: '60%' }} alignItems='center'>
        <Box w={{ base: '100%', md: '70%', lg: '30rem' }}>
          <Text position='absolute' top='2rem' right='2rem'>
            Already a member?{' '}
            <Link to='/sign-in' className='react-router-link'>
              Sign in
            </Link>
          </Text>
          <Heading mb={6} textAlign={{ base: 'center', md: 'left' }}>
            Sign up to Catalyst
          </Heading>

          {/* // ? - hidden for now
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
          </Flex>*/}

          <FormSignUp />
        </Box>
      </Stack>
    </Flex>
  );
}
