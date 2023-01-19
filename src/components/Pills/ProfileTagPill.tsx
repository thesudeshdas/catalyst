import { Tag } from '@chakra-ui/react';

export default function ProfileTagPill({ tag }) {
  return (
    <Tag size={{ base: 'md', md: 'lg' }} variant='solid' colorScheme='facebook'>
      {tag}
    </Tag>
  );
}
