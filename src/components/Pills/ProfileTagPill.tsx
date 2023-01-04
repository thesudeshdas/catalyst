import { Box, Text } from '@chakra-ui/react';

export default function ProfileTagPill({ tag }) {
  // const color = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
  const color = 'red';

  return (
    <Box w='fit-content' px='4' py='2' borderRadius='md' bg={color}>
      <Text color='white'>{tag}</Text>
    </Box>
  );
}
