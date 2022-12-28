import * as React from 'react';
import { Box, Button, Flex, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { filterPost } from '../../lib/utils/filter-utils/fitler.utils';
import { IStack } from '../../types/auth.type';
import { IPost } from '../../types/feed.type';
import SearchStack from '../Search/SearchStack';

export default function FeedFilters({
  postsArr,
  activeFeed,
  showFilter,
  following,
  setFinalPosts,
}: {
  postsArr: IPost[];
  activeFeed: string;
  showFilter: boolean;
  following: string[];
  setFinalPosts: Function;
}) {
  const [stack, setStack] = useState<IStack[]>([]);
  const [filters, setFilters] = useState<{
    stackFilter: string[];
    followingFilter: string[];
    activeFeed: string;
  }>({
    stackFilter: [],
    followingFilter: following,
    activeFeed: activeFeed,
  });

  const handleApplyFilter = (): void => {
    setFilters((prevFitlers) => ({
      ...prevFitlers,
      stackFilter: stack.reduce((acc, cur) => [...acc, cur.label], []),
    }));
  };

  useEffect(() => {
    setFinalPosts(filterPost(postsArr, filters));
  }, [filters]);

  useEffect(() => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      followingFilter: following,
      activeFeed: activeFeed,
    }));
  }, [following, activeFeed]);

  return (
    <Stack display={showFilter ? 'flex' : 'none'} mt={4} gap={2}>
      <Box bg='bg.secondary' borderRadius='lg' p={4}>
        <SearchStack tags={stack} setTags={setStack} />
      </Box>

      <Flex alignSelf='end' gap={4}>
        <Button variant='secondary'>Cancel</Button>
        <Button variant='primary' onClick={handleApplyFilter}>
          Apply Filters
        </Button>
      </Flex>
    </Stack>
  );
}
