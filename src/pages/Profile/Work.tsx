import { AddIcon } from '@chakra-ui/icons';
import {
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { PortfolioPowstCard } from '../../components';
import { useUserDetails } from '../../components/Layouts/ProfileLayout';
import { toggle } from '../../features/modal/modalSlice';

export default function PagePortfolioWork() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.feed.posts);

  const { user, isMyProfile } = useUserDetails();

  const usersPosts = posts.filter((post) => post.user._id === user._id);

  return usersPosts.length > 0 ? (
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
      {usersPosts.map((post) => (
        <GridItem key={post._id}>
          <PortfolioPowstCard details={post} />
        </GridItem>
      ))}

      {isMyProfile && (
        <Button
          borderRadius='xl'
          overflow='hidden'
          width='25rem'
          height='20rem'
          position='relative'
          role='group'
          cursor='pointer'
          onClick={() =>
            dispatch(
              toggle({
                modalComponent: 'CreateSinglePowst',
              })
            )
          }
        >
          <Stack>
            <Heading color='gray' size='4xl' mb={6}>
              <AddIcon />
            </Heading>
            <Text color='gray'>Add a new project</Text>
          </Stack>
        </Button>
      )}
    </Grid>
  ) : (
    <Center>
      <Stack alignItems='center' gap={2} w={{ base: '80%', md: '100%' }}>
        <Heading size='lg' mt={8}>
          {isMyProfile
            ? 'You have not created a powst yet'
            : 'This user has not created a powst yet'}
        </Heading>

        {isMyProfile && (
          <>
            <Text fontSize='lg' textAlign='center'>
              Start creating a powst by clicking below
            </Text>
            <Button
              borderRadius='xl'
              overflow='hidden'
              width='25rem'
              height='20rem'
              position='relative'
              role='group'
              cursor='pointer'
              onClick={() =>
                dispatch(
                  toggle({
                    modalComponent: 'CreateSinglePowst',
                  })
                )
              }
            >
              <Stack>
                <Heading color='gray' size='4xl' mb={6}>
                  <AddIcon />
                </Heading>
                <Text color='gray'>Add a new project</Text>
              </Stack>
            </Button>
          </>
        )}
      </Stack>
    </Center>
  );
}
