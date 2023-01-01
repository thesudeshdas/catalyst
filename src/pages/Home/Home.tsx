import * as React from 'react';
import { useEffect, useState } from 'react';
import { Heading } from '@chakra-ui/react';
import { Layout } from '../../components';
import { useAppDispatch } from '../../app/hooks';
import { logInReducer } from '../../features/auth/authSlice';

export default function PageHome() {
  const dispatch = useAppDispatch();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      fetch(`${process.env.RREACT_APP_AUTH_URL}/login/success`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error('authentication has been failed!');
        })
        .then((resObject) => {
          setUser(resObject.user);

          dispatch(logInReducer({}));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

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
