import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FormSignIn } from '../../components';

import useDocumentTitle from '../../lib/hooks/useDocumentTitle';

export default function PageSignIn() {
  useDocumentTitle('Catalyst | Sign In');

  return (
    <Flex alignItems='center' justifyContent='center' h='100vh'>
      <Image
        display={{ base: 'none', md: 'block' }}
        src='https://images.unsplash.com/photo-1632245889029-e406faaa34cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
        alt='porsche'
        objectFit='cover'
        w='40%'
        h='100vh'
      />

      <Stack w={{ base: '70%', md: '60%' }} alignItems='center'>
        <Box w={{ base: '100%', md: '70%', lg: '30rem' }}>
          <Text position='absolute' top='2rem' right='2rem'>
            Not a member?{' '}
            <Link to='/sign-up' className='react-router-link'>
              Sign up now
            </Link>
          </Text>
          <Heading mb={6} textAlign={{ base: 'center', md: 'left' }}>
            Sign in to Catalyst
          </Heading>
          {/* // ? - Hidden for now
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
          </Flex> */}

          <FormSignIn />
        </Box>
      </Stack>
    </Flex>
  );
}
