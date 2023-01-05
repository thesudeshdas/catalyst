import * as React from 'react';
import { EditIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, Image, Spacer } from '@chakra-ui/react';
import { useState } from 'react';
import { IUser } from '../../types/auth.type';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { toggle } from '../../features/modal/modalSlice';

export default function CreatorDetails({
  creator,
  postName,
}: {
  creator: IUser;
  postName: string;
}) {
  const dispatch = useAppDispatch();
  const { _id: creatorId, followers, profilePic, name } = creator;

  const [doIFollow, setDoIFollow] = useState<boolean>(true);

  const handleFollow = async () => {
    // const response = await followUser(session?.user.id, creatorId);
    // response && setDoIFollow((prev) => !prev);
  };

  const unhandleFollow = async () => {
    // const response = await unfollowUser(session?.user.id, creatorId);
    // response && setDoIFollow((prev) => !prev);
  };

  const isMyProfile: boolean = false;

  return (
    <Flex gap={4} alignItems='center'>
      <Image
        borderRadius='50%'
        src={profilePic?.src || '/images/blank_profile.png'}
        alt={name}
        width='65px'
        height='65px'
      />
      <Box>
        <Heading size='lg'>{postName}</Heading>

        <Flex gap={2} alignItems='center '>
          <Link
            to={`/${creatorId}/portfolio`}
            onClick={() => dispatch(toggle(''))}
          >
            <Button variant='ghost' p={0} mr={3}>
              {name}
            </Button>
          </Link>

          {isMyProfile ? (
            <Link to='/edit-profile'>
              <Button variant='secondary' size='sm' rightIcon={<EditIcon />}>
                Edit Profile
              </Button>
            </Link>
          ) : doIFollow ? (
            <Button variant='secondary' size='sm' onClick={unhandleFollow}>
              Unfollow
            </Button>
          ) : (
            <Button variant='primary' size='sm' onClick={handleFollow}>
              Follow
            </Button>
          )}
        </Flex>
      </Box>
    </Flex>
  );
}
