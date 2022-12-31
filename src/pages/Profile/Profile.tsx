import * as React from 'react';
import { Box, Button, Heading } from '@chakra-ui/react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

export const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      returnTo: window.location.origin,
    });
  };

  return (
    <button className='button__logout' onClick={handleLogout}>
      Log Out
    </button>
  );
};

function PageProfile() {
  const { user } = useAuth0();

  console.log({ user });

  console.log('profile page loading');

  return (
    <Box>
      <Heading>This is the profile page</Heading>
      <Button>
        <LogoutButton />
      </Button>
    </Box>
  );
}

export default withAuthenticationRequired(PageProfile);
