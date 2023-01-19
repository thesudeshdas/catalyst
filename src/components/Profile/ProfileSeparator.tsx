import { Center, Divider, Flex, Heading, Stack } from '@chakra-ui/react';
import { IUser } from '../../types/auth.type';
import ProfilePicture from '../Images/ProfilePicture';

export default function ProfileSeparator({ user }: { user: IUser }) {
  return (
    <Stack gap={4}>
      <Flex gap={4} alignItems='center' justifyContent='center'>
        <Divider bg='black' h={1} borderRadius='lg' w='40%' />
        <ProfilePicture
          src={user.profilePic?.src}
          alt={user.name}
          size='7rem'
        />
        <Divider bg='black' h={1} borderRadius='lg' w='40%' />
      </Flex>
      <Center>
        <Heading>{user.name}</Heading>
      </Center>
    </Stack>
  );
}
