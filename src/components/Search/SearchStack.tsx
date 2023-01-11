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
import { techOptions } from '../../data/tech-stack/techStack.data';

export default function SearchStack({ tags, setTags }) {
  const [selected, setSelected] = useState<{ value: string; label: string }[]>(
    tags || []
  );
  const [result, setResult] = useState<{ value: string; label: string }[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleAddTag = (tag) => {
    const foundItem = techOptions.find((option) => option.value == tag);

    const alreadyExists = selected.find((option) => option.value == tag);

    if (foundItem && !alreadyExists) {
      setSelected((prevSelected) => [...prevSelected, foundItem]);
    }

    setSearchQuery('');
    setResult([]);
  };

  const handleRemoveTag = (tag) => {
    setSelected((prevSelected) =>
      prevSelected.filter((option) => option.value != tag)
    );
  };

  const handleSearch = (event) => {
    const query = event.target.value;

    setSearchQuery(query);

    if (query.length > 0) {
      const searchResult = techOptions.filter((option) =>
        option.label.toLowerCase().includes(query.toLowerCase())
      );

      if (searchResult.length > 0) {
        setResult(searchResult);
      } else {
        setResult([{ value: 'nothing', label: 'Can not find any such tech' }]);
      }
    } else {
      setResult([]);
    }
  };

  const techStack = techStackIcons.filter(({ alt }) =>
    selected.some(({ label }) => label == alt)
  );

  useEffect(() => {
    setTags(selected);
  }, [selected, setTags]);

  return (
    <Stack gap={2}>
      <Flex wrap='wrap' gap={4}>
        {techStack.map((icon) => (
          <Image
            key={icon.alt}
            src={icon.src}
            alt={icon.alt}
            width='40px'
            height='40px'
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
