import * as React from 'react';
import { Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react';

import { useEffect, useState } from 'react';
import { FeedFilters, FeedNav, PowstCard } from '../../components';
import { IPost } from '../../types/feed.type';
import { useAppSelector } from '../../app/hooks';

export default function PageFeed() {
  const posts = useAppSelector((state) => state.feed.posts);

  const [activeFeed, setActiveFeed] = useState<string>('Discover');
  const [showFilter, setShowFilter] = useState(false);
  const [following, setFollowing] = useState([]);
  const [finalPosts, setFinalPosts] = useState<IPost[]>([]);

  let status = 'authenticated';

  useEffect(() => {
    setFinalPosts(posts);
  }, [posts]);

  return (
    <>
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
    </>
  );
}
