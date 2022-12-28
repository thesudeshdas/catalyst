import * as React from 'react';
import {
  Button,
  Divider,
  Flex,
  Heading,
  Spacer,
  Stack,
} from '@chakra-ui/react';
import { FilterIcon } from '../../assets/icons/icons';
import { feedNav } from '../../data/feed/feed.data';

export default function FeedNav({ activeFeed, setActiveFeed, setShowFilter }) {
  const handleFeedChange = (e) => setActiveFeed(e.target.innerText);

  return (
    <Flex gap={12}>
      {feedNav.items.map((item) =>
        activeFeed == item.text ? (
          <Stack key={item.text}>
            <Button variant='ghost' onClick={handleFeedChange}>
              <Heading size='md' fontWeight='600' color='black'>
                {item.text}
              </Heading>
            </Button>

            <Divider height='4px' bg='black' opacity={1} borderRadius='md' />
          </Stack>
        ) : (
          <Button key={item.text} variant='ghost' onClick={handleFeedChange}>
            <Heading size='md' fontWeight='600' color='gray'>
              {item.text}
            </Heading>
          </Button>
        )
      )}

      <Spacer />

      <Button
        leftIcon={<FilterIcon />}
        variant='secondaryBlack'
        onClick={() => setShowFilter((prev) => !prev)}
      >
        Filters
      </Button>
    </Flex>
  );
}
