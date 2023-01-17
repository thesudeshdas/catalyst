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
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { PortfolioPowstCard } from '../../components';
import { useUserDetails } from '../../components/Layouts/ProfileLayout';
import { toggle } from '../../features/modal/modalSlice';

export default function PagePortfolioSaved() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.feed.posts);

  const { user, isMyProfile } = useUserDetails();

  const authUser = useAppSelector((state) => state.auth.user);

  const savedPost = posts.filter((post) =>
    authUser?.savedPost?.includes(post._id)
  );

  return savedPost.length > 0 ? (
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
          .filter((post) => authUser?.savedPost?.includes(post._id))
          .map((post) => (
            <GridItem key={post._id}>
              <PortfolioPowstCard details={post} />
            </GridItem>
          ))}
    </Grid>
  ) : (
    <>
      <Stack alignItems='center' gap={2}>
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
    </>
  );
}
