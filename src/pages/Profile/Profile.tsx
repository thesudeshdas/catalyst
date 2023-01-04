import { Flex, Heading, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react';

import { ListTechStack, PortfolioPowstCard } from '../../components';
import { useAppSelector } from '../../app/hooks';
import { useUserDetails } from '../../components/Layouts/ProfileLayout';

export default function PagePortfolio() {
  const { user, starredPost, handleStarPost, handleUnstarPost } =
    useUserDetails();

  const posts = useAppSelector((state) => state.feed.posts);

  return (
    <>
      {/* Bio & tech stack */}
      <Flex justifyContent='space-between' my={8} alignItems='start'>
        {user?.bio && (
          <Text w='50%' fontSize='lg'>
            {user?.bio}
          </Text>
        )}
        <ListTechStack
          stack={user?.stack}
          w='22rem'
          direction='row-reverse'
          wrap='wrap'
          gap='0.5rem'
        />
      </Flex>

      {/* Featured work */}
      <Stack mb={8} gap={2}>
        <Heading size='md'>Featured Work</Heading>

        {posts && posts.length > 0 && (
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
    </>
  );
}
