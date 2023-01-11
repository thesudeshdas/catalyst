import { Grid, GridItem, Skeleton } from '@chakra-ui/react';

export default function FeedLoader() {
  return (
    <Grid
      templateColumns='repeat(3, 1fr)'
      my={8}
      gap={6}
      justifyItems='center'
      alignItems='center'
    >
      <GridItem>
        <Skeleton width='25rem' height='20rem' borderRadius='xl' />
      </GridItem>
      <GridItem>
        <Skeleton width='25rem' height='20rem' borderRadius='xl' />
      </GridItem>
      <GridItem>
        <Skeleton width='25rem' height='20rem' borderRadius='xl' />
      </GridItem>
      <GridItem>
        <Skeleton width='25rem' height='20rem' borderRadius='xl' />
      </GridItem>
      <GridItem>
        <Skeleton width='25rem' height='20rem' borderRadius='xl' />
      </GridItem>
      <GridItem>
        <Skeleton width='25rem' height='20rem' borderRadius='xl' />
      </GridItem>
    </Grid>
  );
}
