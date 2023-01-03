import * as React from 'react';
import { useEffect, useState } from 'react';
import { Heading } from '@chakra-ui/react';
import { Layout } from '../../components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { logInReducer } from '../../features/auth/authSlice';
import axios from 'axios';

export default function PageHome() {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_AUTH_URL}/login/success`,
        {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': true,
          },
        }
      );

      console.log({ response });

      if (response.status == 200) {
        dispatch(logInReducer({ user: response.data.user }));
      } else {
        console.log('kuch gdabadi');
      }
    })();
  }, []);

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
