import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';

import { ListTechStack, PortfolioPowstCard } from '../../components';
import { useAppSelector } from '../../app/hooks';
import { useUserDetails } from '../../components/Layouts/ProfileLayout';
import useDocumentTitle from '../../lib/hooks/useDocumentTitle';

export default function PagePortfolio() {
  useDocumentTitle('Catalyst | Portfolio');

  const { user, starredPost } = useUserDetails();

  const posts = useAppSelector((state) => state.feed.posts);

  let featuredPost = posts
    .filter((post) => post.user?._id === user?._id)
    .filter((post) => starredPost?.includes(post._id))
    .slice(0, 3);

  featuredPost.length < 3 &&
    (featuredPost = [
      ...featuredPost,
      ...posts.filter((post) => post.user?._id === user?._id),
    ].slice(0, 3));

  return (
    <Box p={2}>
      {/* Bio & tech stack */}
      <Flex
        justifyContent='space-between'
        my={4}
        alignItems='start'
        direction={{ base: 'column-reverse', md: 'row' }}
        gap={4}
      >
        {user?.bio && (
          <Text w={{ base: '100%', md: '60%', xl: '50%' }} fontSize='lg'>
            {user?.bio} Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus perferendis accusantium omnis ea consectetur
            dignissimos nostrum atque doloribus quod, voluptate, nobis
            aspernatur delectus! Eveniet, illo nesciunt. Nobis iusto tenetur
            tempora.
          </Text>
        )}
        <ListTechStack
          stack={user?.stack}
          w={{ base: '100%', md: '40%', lg: '35%' }}
          direction={{ base: 'row', md: 'row-reverse' }}
          wrap='wrap'
          gap={4}
        />
      </Flex>

      {/* Featured work */}
      <Stack mb={8} gap={2}>
        <Heading size='md' textAlign={{ base: 'center', md: 'left' }}>
          Featured Work
        </Heading>

        {posts && posts.length > 0 && (
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              xl: 'repeat(3, 1fr)',
            }}
            my={8}
            gap={4}
            justifyItems='center'
            alignItems='center'
          >
            {featuredPost.map((post) => {
              return (
                <GridItem key={post._id}>
                  <PortfolioPowstCard details={post} />
                </GridItem>
              );
            })}
          </Grid>
        )}
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
    </Box>
  );
}
