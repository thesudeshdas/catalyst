import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';

export default function PowstTagPill(props) {
  return (
    <Box w='fit-content' px='4' py='2' borderRadius='lg' {...props}>
      <Text
        fontSize='xs'
        fontWeight='700'
        color='white'
        textTransform='uppercase'
      >
        {props.text}
      </Text>
    </Box>
  );
}
