import * as React from 'react';

import { useAppSelector } from '../../app/hooks';
import {
  Box,
  Button,
  Flex,
  Heading,
  Spinner,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { useState } from 'react';
import {
  Layout,
  ListTechStack,
  // PortfolioNav,
  // PortfolioPowstCard,
  // ProfileDetails,
} from '../../components';

import { IUser } from '../../types/auth.type';
import { IPost } from '../../types/feed.type';

export default function PagePortfolio() {
  const user = useAppSelector((state) => state.auth.user);

  console.log({ user });
  const [starredPost, setStarredPost] = useState(user.starredPost || []);

  // const handleStarPost = async (postId) => {
  //   if (starredPost.length < 3) {
  //     const newStarredPost = [...starredPost, postId];

  //     const data = await updateUser(user._id, { starredPost: newStarredPost });

  //     if (data.starredPost.length > starredPost.length) {
  //       setStarredPost(data.starredPost);
  //     }
  //   } else {
  //     console.log('Only 3 posts can be starred');
  //     // TODO - Make a notification for this
  //   }
  // };

  // const handleUnstarPost = async (postId) => {
  //   const newStarredPost = starredPost.filter((item) => item != postId);

  //   const data = await updateUser(user._id, { starredPost: newStarredPost });

  //   if (data.starredPost.length < starredPost.length) {
  //     setStarredPost(data.starredPost);
  //   }
  // };

  return (
    <>
      {/* <ProfileDetails user={user} />

      <PortfolioNav /> */}

      {/* Bio & tech stack */}
      <Flex justifyContent='space-between' my={8} alignItems='start'>
        {user?.bio && (
          <Text w='50%' fontSize='lg'>
            {user.bio}
          </Text>
        )}
        <ListTechStack
          stack={user.stack}
          w='22rem'
          direction='row-reverse'
          wrap='wrap'
          gap='0.5rem'
        />
      </Flex>

      {/* Featured work */}
      <Stack mb={8} gap={2}>
        <Heading size='md'>Featured Work</Heading>

        {/* {posts && posts.length > 0 && (
          <Wrap justify='space-between'>
            {posts
              .filter((post) => post.user._id == user._id)
              .slice(0, 3)
              .map((post) => (
                <WrapItem key={post._id}>
                  <PortfolioPowstCard
                    details={post}
                    handleUnstarPost={handleUnstarPost}
                    handleStarPost={handleStarPost}
                    starredPost={starredPost}
                  />
                </WrapItem>
              ))}
          </Wrap>
        )} */}
      </Stack>

      {/* Featured Blogs */}
      {/* <Stack>
        <Heading mb={4} size='md'>
          Featured Blog
        </Heading>

        <Wrap justify='space-between'>
          <WrapItem>
            <PortfolioBlogCard />
          </WrapItem>
          <WrapItem>
            <PortfolioBlogCard />
          </WrapItem>
          <WrapItem>
            <PortfolioBlogCard />
          </WrapItem>
        </Wrap>
      </Stack> */}
    </>
  );
}
