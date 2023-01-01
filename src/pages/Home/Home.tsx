import * as React from 'react';
import { useEffect, useState } from 'react';
import { Heading } from '@chakra-ui/react';
import { Layout } from '../../components';

export default function PageHome() {
  const [user, setUser] = useState(null);
  const [authStatus, setAuthStatus] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      fetch('http://localhost:8000/auth/login/success', {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Credentials': true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error('authentication has been failed!');
        })
        .then((resObject) => {
          setUser(resObject.user);
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
