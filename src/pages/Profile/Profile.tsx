import * as React from 'react';
import { Box, Button, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

function PageProfile() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8000/users');
  //       console.log({ response });
  //     } catch (error) {
  //       if (AxiosError) {
  //         navigate('/sign-in');
  //       }
  //     }
  //   })();
  // }, []);

  // console.log('profile page loading');

  return (
    <Box>
      <Heading>This is the profile page</Heading>
      <Button></Button>
    </Box>
  );
}

export default PageProfile;
