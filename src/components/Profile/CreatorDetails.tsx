import { EditIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { IUser } from '../../types/auth.type';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { promptLogin, toggle } from '../../features/modal/modalSlice';
import { followUser, unfollowUser } from '../../features/auth/authActions';
import ProfilePicture from '../Images/ProfilePicture';

export default function CreatorDetails({
  creator,
  postName,
}: {
  creator: IUser;
  postName: string;
}) {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((state) => state.auth.signInStatus);
  const authUserId = useAppSelector((state) => state.auth.user?._id);

  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const authUser = useAppSelector((state) => state.auth);

  const { _id: creatorId, followers, profilePic, name } = creator;

  const [doIFollow, setDoIFollow] = useState<boolean>(
    followers.includes(authUserId)
  );

  const handleFollow = async () => {
    if (authStatus) {
      console.log('follow button se', authUser, accessToken);

      const response = await dispatch(
        followUser({
          followerUserId: authUserId,
          followingUserId: creatorId,
        })
      );

      response && setDoIFollow((prev) => !prev);
    } else {
      dispatch(promptLogin());
    }
  };

  const unhandleFollow = async () => {
    const response = await dispatch(
      unfollowUser({
        unfollowerUserId: authUserId,
        unfollowingUserId: creatorId,
      })
    );

    response && setDoIFollow((prev) => !prev);
  };

  const isMyProfile: boolean = authUserId === creatorId;

  return (
    <Flex gap={4} alignItems='center'>
      <ProfilePicture src={profilePic?.src} alt={name} />

      <Stack>
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
      </Stack>
    </Flex>
  );
}
