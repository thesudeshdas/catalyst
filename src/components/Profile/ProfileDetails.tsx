import { EditIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  chakra,
  Flex,
  Heading,
  Input,
  Spacer,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { socialIcons } from '../../data/portfolio/portfolio.data';
import ProfileTagPill from '../Pills/ProfileTagPill';

// import ProfileTagPill from '../Pills/ProfileTagPill';

const amIFollowing = (arr, id) => {
  return arr.includes(id);
};

export default function ProfileDetails({ user }) {
  const dispatch = useAppDispatch();

  const authUser = useAppSelector((state) => state.auth.user);

  const isMyProfile = authUser._id == user?._id;

  const [doIFollow, setDoIFollow] = useState<boolean>(false);

  // const isMyProfile = user._id == session?.user.id;

  const handleFollow = async () => {
    // const response = await followUser(session?.user.id, user._id);
    // if (response) {
    //   setDoIFollow((prev) => !prev);
    // }
  };

  const unhandleFollow = async () => {
    // const response = await unfollowUser(session?.user.id, user._id);
    // if (response) {
    //   setDoIFollow((prev) => !prev);
    // }
  };

  // useEffect(() => {
  //   setDoIFollow(amIFollowing(user.followers, session?.user.id));
  // }, [session]);

  const socialToBeShown = socialIcons.filter(({ alt }) =>
    user?.social?.some(
      ({ platform, link }) => alt == platform && link.length > 0
    )
  );

  return (
    <Flex mb={8} alignItems='center' justifyContent='space-between'>
      <Image
        alt={user?.profilePic?.alt || 'blank profile'}
        src={user?.profilePic?.src || '/images/blank_profile.png'}
        width={150}
        height={150}
        objectFit='cover'
        borderRadius='50%'
      />

      <Stack ml='2rem' gap={2}>
        <Flex gap={4} alignItems='center'>
          <Heading size='lg'>{user?.name} </Heading>
          {isMyProfile ? (
            <Link to='/edit-profile'>
              <Button size='sm' rightIcon={<EditIcon />}>
                Edit Profile
              </Button>
            </Link>
          ) : doIFollow ? (
            <Button
              size='sm'
              color='white'
              bg='brand.600'
              onClick={unhandleFollow}
            >
              Unfollow
            </Button>
          ) : (
            <Button
              size='sm'
              color='white'
              bg='brand.600'
              onClick={handleFollow}
            >
              Follow
            </Button>
          )}
        </Flex>

        {/* // ? - check if the profile is user's or other's */}
        {isMyProfile ? (
          <Flex gap={1} alignItems='center'>
            {user?.title ? (
              <Text fontWeight='500' fontSize='xl'>
                {user?.title}
              </Text>
            ) : (
              <Link to='/edit-profile'>
                <Input
                  variant='flushed'
                  isReadOnly
                  placeholder="What's your job title? 👷"
                />
              </Link>
            )}

            {user?.title && user?.company && (
              <Text fontWeight='500' fontSize='xl'>
                @
              </Text>
            )}

            {user?.company ? (
              <Text fontWeight='500' fontSize='xl'>
                {user?.company}
              </Text>
            ) : (
              <Link to='/edit-profile'>
                <Input
                  variant='flushed'
                  isReadOnly
                  placeholder='Where do you work? 🏢'
                />
              </Link>
            )}
          </Flex>
        ) : (
          <Flex gap={1} alignItems='center'>
            <Text fontWeight='500' fontSize='xl'>
              {user?.title}
            </Text>

            {user?.title && user?.company && (
              <Text fontWeight='500' fontSize='xl'>
                @
              </Text>
            )}

            <Text fontWeight='500' fontSize='xl'>
              {user?.company}
            </Text>
          </Flex>
        )}

        {isMyProfile ? (
          <Flex gap='4'>
            {user?.tags?.length > 0 ? (
              user.tags?.map((tag) => <ProfileTagPill tag={tag} />)
            ) : (
              <Link to='/edit-profile'>
                <Input
                  isReadOnly
                  variant='flushed'
                  placeholder='Add your tags 🚩'
                />
              </Link>
            )}
          </Flex>
        ) : (
          <Flex gap='4'>
            {user?.tags?.map((tag) => (
              <ProfileTagPill tag={tag} />
            ))}
          </Flex>
        )}
      </Stack>

      <Spacer />

      <Flex>
        <Flex w='12rem' direction='row-reverse' wrap='wrap' gap='0.5rem'>
          {socialToBeShown.map((icon) => {
            return (
              <Image
                key={icon.src}
                src={icon.src}
                alt={icon.alt}
                width={32}
                height={32}
              />
            );
          })}
          <Text>{user?.email}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
