import * as React from 'react';
import { CloseIcon } from '@chakra-ui/icons';
import {
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { techStackIcons } from '../../data/portfolio/portfolio.data';

export const options = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'css3', label: 'CSS3' },

  {
    value: 'figma',
    label: 'Figma',
  },
  {
    value: 'github',
    label: 'Github',
  },
  {
    value: 'git',
    label: 'Git',
  },
  {
    value: 'graphql',
    label: 'Graphql',
  },
  {
    value: 'html5',
    label: 'HTML5',
  },
  {
    value: 'materialUI',
    label: 'MaterialUI',
  },
  {
    value: 'nextJS',
    label: 'NextJS',
  },
  {
    value: 'nodeJS',
    label: 'NodeJS',
  },
  {
    value: 'reactJS',
    label: 'ReactJS',
  },
  {
    value: 'reactQuery',
    label: 'React Query',
  },
  {
    value: 'remixJS',
    label: 'RemixJS',
  },
  {
    value: 'sass',
    label: 'SASS',
  },
  {
    value: 'tailwindCSS',
    label: 'TailwindCSS',
  },
  {
    value: 'visualStudioCode',
    label: 'Visual Studio Code',
  },
];

export default function SearchStack({ tags, setTags }) {
  const [selected, setSelected] = useState<{ value: string; label: string }[]>(
    tags || []
  );
  const [result, setResult] = useState<{ value: string; label: string }[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleAddTag = (tag) => {
    const foundItem = options.find((option) => option.value == tag);

    const alreadyExists = selected.find((option) => option.value == tag);

    if (foundItem && !alreadyExists) {
      setSelected((prevSelected) => [...prevSelected, foundItem]);
    }

    setSearchQuery('');
  };

  const handleRemoveTag = (tag) => {
    setSelected((prevSelected) =>
      prevSelected.filter((option) => option.value != tag)
    );
  };

  const handleSearch = (event) => {
    const query = event.target.value;

    setSearchQuery(query);

    const searchResult = options.filter((option) =>
      option.label.toLowerCase().includes(query.toLowerCase())
    );

    if (searchResult.length > 0) {
      setResult(searchResult);
    } else {
      setResult([{ value: 'nothing', label: 'Can not find any such tech' }]);
    }
  };

  // const techStack = techStackIcons.filter(({ alt }) =>
  //   selected.some(({ label }) => label == alt)
  // );

  const techStack = techStackIcons;

  useEffect(() => {
    setTags(selected);
  }, [selected]);

  return (
    <Stack gap={4}>
      <Flex wrap='wrap' gap={4}>
        {techStack.map((icon) => (
          <Image
            key={icon.alt}
            src={icon.src}
            alt={icon.alt}
            width={32}
            height={32}
          />
        ))}
      </Flex>

      <InputGroup>
        <Input
          placeholder='Search for your tag'
          value={searchQuery}
          onChange={handleSearch}
        />
        <InputRightElement
          onClick={() => setSearchQuery('')}
          children={<CloseIcon boxSize='3' />}
        />
      </InputGroup>

      <Flex wrap='wrap' gap={2}>
        {selected.map((item) => (
          <Tag
            key={item.value}
            borderRadius='full'
            variant='solid'
            colorScheme='green'
          >
            <TagLabel>{item.label}</TagLabel>
            <TagCloseButton onClick={() => handleRemoveTag(item.value)} />
          </Tag>
        ))}
      </Flex>

      {result.length > 0 && (
        <VStack>
          {result.map((item) => (
            <Input
              readOnly
              cursor='pointer'
              onClick={() => handleAddTag(item.value)}
              key={item.value}
              value={item.label}
            />
          ))}
        </VStack>
      )}
    </Stack>
  );
}
