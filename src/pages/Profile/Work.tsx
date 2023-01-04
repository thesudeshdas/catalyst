import { AddIcon } from '@chakra-ui/icons';
import { Button, Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { PortfolioPowstCard } from '../../components';
import { useUserDetails } from '../../components/Layouts/ProfileLayout';

export default function PagePortfolioWork() {
  const posts = useAppSelector((state) => state.feed.posts);

  const { user, starredPost, handleStarPost, handleUnstarPost } =
    useUserDetails();

  return (
    <Grid
      templateColumns='repeat(3, 1fr)'
      mt={8}
      mb={8}
      gap={4}
      justifyItems='center'
      alignItems='center'
    >
      {posts.length > 0 &&
        posts
          .filter((post) => post.user._id == user._id)
          .map((post) => (
            <GridItem key={post._id}>
              <PortfolioPowstCard
                details={post}
                handleUnstarPost={handleUnstarPost}
                handleStarPost={handleStarPost}
                starredPost={starredPost}
              />
            </GridItem>
          ))}
      <Link to='/create-powst'>
        <Button
          borderRadius='xl'
          overflow='hidden'
          width='25rem'
          height='20rem'
          position='relative'
          role='group'
          cursor='pointer'
        >
          <Stack>
            <Heading color='gray' size='4xl' mb={6}>
              <AddIcon />
            </Heading>
            <Text color='gray'>Add a new project</Text>
          </Stack>
        </Button>
      </Link>
    </Grid>
  );
}
