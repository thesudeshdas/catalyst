import {
  Button,
  Center,
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
    <Center>
      <Flex
        gap={{ base: 0, md: 8, lg: 12 }}
        w={{ base: '100%', md: '80%', lg: '95%' }}
        alignItems='center'
      >
        {feedNav.items.map((item) =>
          activeFeed === item.text ? (
            <Stack key={item.text} position='relative'>
              <Button variant='ghost' onClick={handleFeedChange}>
                <Heading
                  size={{ base: 'sm', lg: 'md' }}
                  fontWeight='600'
                  color='black'
                >
                  {item.text}
                </Heading>
              </Button>

              <Divider
                height='4px'
                bg='black'
                opacity={1}
                borderRadius='md'
                position='absolute'
                bottom='-10%'
              />
            </Stack>
          ) : (
            <Button key={item.text} variant='ghost' onClick={handleFeedChange}>
              <Heading
                size={{ base: 'sm', lg: 'md' }}
                fontWeight='600'
                color='gray'
              >
                {item.text}
              </Heading>
            </Button>
          )
        )}

        <Spacer />

        <Button
          size={{ base: 'sm', lg: 'md' }}
          leftIcon={<FilterIcon />}
          variant='secondaryBlack'
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filters
        </Button>
      </Flex>
    </Center>
  );
}
