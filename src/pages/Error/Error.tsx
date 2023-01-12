import { Heading, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import useDocumentTitle from '../../lib/hooks/useDocumentTitle';

export default function PageError() {
  useDocumentTitle('Catalyst | Error');

  return (
    <Stack alignItems='center'>
      <Heading mt={24}>Uh Oh! Looks like something broke</Heading>

      <Heading size='md'>
        Go to{' '}
        <Link to='/'>
          <Text display='inline' color='brand.600'>
            Home
          </Text>
        </Link>
      </Heading>
    </Stack>
  );
}
