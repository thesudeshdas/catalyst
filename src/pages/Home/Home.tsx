import * as React from 'react';
import { useEffect, useState } from 'react';
import { Heading } from '@chakra-ui/react';
import { Layout } from '../../components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import axios from 'axios';

export default function PageHome() {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth.user);

  console.log({ user });

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
