import * as React from 'react';
import { Box } from '@chakra-ui/react';

export default function ModalContainer({ children }) {
  return (
    <Box
      position='fixed'
      bottom='0'
      left='0'
      right='0'
      width='100vw'
      height='100vh'
      zIndex='2'
    >
      {children}
    </Box>
  );
}
