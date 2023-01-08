import { Center, Divider, Flex, Heading } from '@chakra-ui/react';
import { IUser } from '../../types/auth.type';
import ProfilePicture from '../Images/ProfilePicture';

export default function ProfileSeparator({ user }: { user: IUser }) {
  return (
    <>
      <Flex gap={4} alignItems='center'>
        <Divider bg='black' h={1} borderRadius='lg' />
        <ProfilePicture
          src={user.profilePic?.src}
          alt={user.name}
          size='20rem'
        />
        <Divider bg='black' h={1} borderRadius='lg' />
      </Flex>
      <Center>
        <Heading size='lg'>{user.name}</Heading>
      </Center>
    </>
  );
}
