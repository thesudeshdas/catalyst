import * as React from 'react';
import { Box } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';

export default function PageCallback() {
  const { user } = useAuth0();

  console.log({ user });

  return <Box>This is the callback page</Box>;
}
