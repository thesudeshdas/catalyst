import * as React from 'react';
import { Box, Heading } from '@chakra-ui/react';

import { useAuth0 } from '@auth0/auth0-react';

export const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      prompt: 'login',
      appState: {
        returnTo: '/feed',
      },
    });
  };

  return (
    <button className='button__login' onClick={handleLogin}>
      Log In
    </button>
  );
};

export default function PageSignIn() {
  return (
    <Box>
      <Heading>Sign in page</Heading>

      <LoginButton />
    </Box>
  );
}
