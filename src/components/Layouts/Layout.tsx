import * as React from 'react';
import { Box } from '@chakra-ui/react';
import AppNav from '../Navs/AppNav';
// import CommentPanel from '../Chats/CommentPanel';

export default function Layout({
  children,
  comment,
}: {
  children: any;
  comment?: boolean;
}) {
  return (
    <>
      <AppNav />
      <Box maxW={comment ? '90vw' : '70vw'} m='2rem auto'>
        {children}
      </Box>
    </>
  );
}
