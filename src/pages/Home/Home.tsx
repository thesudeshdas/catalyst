import { Center, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function PageHome() {
  return (
    <Stack alignItems='center'>
      <Heading>The homepage is under construction</Heading>

      <Image src='/icons/neutral/construction.gif' />

      <Heading size='md'>
        Check out{' '}
        <Link to='/feed'>
          <Text display='inline' color='brand.600'>
            Feed
          </Text>
        </Link>
      </Heading>
    </Stack>
  );
}
