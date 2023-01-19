import { Grid, GridItem, Skeleton } from '@chakra-ui/react';

export default function FeedLoader() {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        xl: 'repeat(3, 1fr)',
      }}
      my={8}
      gap={6}
      justifyItems='center'
      alignItems='center'
    >
      <GridItem>
        <Skeleton
          width={{ base: '22.5rem', lg: '25rem' }}
          height={{ base: '18rem', lg: '20rem' }}
          borderRadius='xl'
        />
      </GridItem>
      <GridItem>
        <Skeleton
          width={{ base: '22.5rem', lg: '25rem' }}
          height={{ base: '18rem', lg: '20rem' }}
          borderRadius='xl'
        />
      </GridItem>
      <GridItem>
        <Skeleton
          width={{ base: '22.5rem', lg: '25rem' }}
          height={{ base: '18rem', lg: '20rem' }}
          borderRadius='xl'
        />
      </GridItem>
      <GridItem>
        <Skeleton
          width={{ base: '22.5rem', lg: '25rem' }}
          height={{ base: '18rem', lg: '20rem' }}
          borderRadius='xl'
        />
      </GridItem>
      <GridItem>
        <Skeleton
          width={{ base: '22.5rem', lg: '25rem' }}
          height={{ base: '18rem', lg: '20rem' }}
          borderRadius='xl'
        />
      </GridItem>
      <GridItem>
        <Skeleton
          width={{ base: '22.5rem', lg: '25rem' }}
          height={{ base: '18rem', lg: '20rem' }}
          borderRadius='xl'
        />
      </GridItem>
    </Grid>
  );
}
