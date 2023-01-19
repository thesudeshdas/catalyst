import { AddIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { PortfolioPowstCard } from '../../components';

export default function PagePortfolioSaved() {
  const posts = useAppSelector((state) => state.feed.posts);

  const authUser = useAppSelector((state) => state.auth.user);

  const savedPost = posts.filter((post) =>
    authUser?.savedPost?.includes(post._id)
  );

  return savedPost.length > 0 ? (
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
      {posts.length > 0 &&
        posts
          .filter((post) => authUser?.savedPost?.includes(post._id))
          .map((post) => (
            <GridItem key={post._id}>
              <PortfolioPowstCard details={post} />
            </GridItem>
          ))}
    </Grid>
  ) : (
    <Center>
      <Stack alignItems='center' gap={2} w={{ base: '80%', md: '100%' }}>
        <Heading size='lg' mt={8}>
          You have not saved anything yet
        </Heading>

        <Text fontSize='lg' textAlign='center'>
          Start exploring and save what you like.{' '}
          <Link to='/feed' className='react-router-link'>
            Let's save
          </Link>
        </Text>
      </Stack>
    </Center>
  );
}
