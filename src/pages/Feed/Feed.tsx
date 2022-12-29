import * as React from 'react';
import { Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react';

import { useEffect, useState } from 'react';
import { FeedFilters, FeedNav, Layout, PowstCard } from '../../components';
import { IPost } from '../../types/feed.type';
import { getAllPosts } from '../../lib/api/posts.api';

export default function PageFeed() {
  const [activeFeed, setActiveFeed] = useState<string>('Discover');
  const [showFilter, setShowFilter] = useState(false);
  const [following, setFollowing] = useState([]);
  const [finalPosts, setFinalPosts] = useState<IPost[]>([]);

  let status = 'authenticated';

  // useEffect(() => {
  //   if (status == 'authenticated') {
  //     (async () => {
  //       const response = await getUserDetails(session.user.id);

  //       if (response.following.length > 0) {
  //         setFollowing(response.following);
  //       }
  //     })();
  //   }
  // }, [session]);

  // useEffect(() => {
  //   if (status == 'authenticated') {
  //     setActiveFeed('Following');
  //   } else {
  //     setActiveFeed('Discover');
  //   }
  // }, [status]);

  useEffect(() => {
    (async () => {
      const response = await getAllPosts();

      if (response.status === 200) {
        setFinalPosts(response.data.posts);
      } else {
        console.log('handle error in feed page');
      }
    })();
  }, []);

  return (
    <Layout>
      <FeedNav
        activeFeed={activeFeed}
        setActiveFeed={setActiveFeed}
        setShowFilter={setShowFilter}
      />

      <FeedFilters
        activeFeed={activeFeed}
        postsArr={[]}
        setFinalPosts={setFinalPosts}
        following={following}
        showFilter={showFilter}
      />

      {activeFeed === 'Discover' && (
        <Grid
          templateColumns='repeat(3, 1fr)'
          my={8}
          gap={4}
          justifyItems='center'
          alignItems='center'
        >
          {finalPosts.map((post) => {
            console.log({ post });

            return (
              <GridItem key={post._id}>
                <PowstCard details={post} />
              </GridItem>
            );
          })}
        </Grid>
      )}

      {activeFeed === 'Following' && status === 'unauthenticated' && (
        <Heading textAlign='center' mt={8} size='lg'>
          You are not signed in, sign in now to see what people you follow have
          been creating
          <br />
          😔😕😥
        </Heading>
      )}

      {activeFeed === 'Following' &&
        status === 'authenticated' &&
        following.length === 0 && (
          <Stack mt={8}>
            <Heading textAlign='center' mb={4} size='lg'>
              You are not following anyone yet
              <br />
              😔😕😥
            </Heading>

            <Text fontSize='lg' textAlign='center'>
              Check out what other <br />{' '}
              <Text as='span' color='brand.600' fontWeight='600'>
                Developers
              </Text>{' '}
              are creating
            </Text>
          </Stack>
        )}

      {activeFeed === 'Following' && (
        <Grid
          templateColumns='repeat(3, 1fr)'
          my={8}
          gap={4}
          justifyItems='center'
          alignItems='center'
        >
          {finalPosts.map((post) => (
            <GridItem key={post._id}>
              <PowstCard details={post} />
            </GridItem>
          ))}
        </Grid>
      )}
    </Layout>
  );
}
