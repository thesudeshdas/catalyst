import * as React from 'react';
import { Heading } from '@chakra-ui/react';
import { Layout } from '../../components';

export default function PageHome() {
  return (
    <>
      <Heading mb={8}>Main page</Heading>
      {/* sign out and sign in */}
      {/* {session ? (
        <Button onClick={() => signOut()}>Sign out</Button>
      ) : (
        <Button onClick={() => signIn()}>Sign in</Button>
      )} */}
    </>
  );
}
