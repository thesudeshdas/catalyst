import { Center, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function PageError() {
  return (
    <Stack alignItems='center'>
      <Heading mt={24}>Uh Oh! Looks like something broke</Heading>

      <Heading size='md'>
        Go Back to <Link to='/'>Home</Link>
      </Heading>
    </Stack>
  );
}
