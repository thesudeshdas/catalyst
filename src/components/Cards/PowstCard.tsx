import * as React from 'react';
import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import PowstTagPill from '../Pills/PowstTagPill';

export default function PowstCard({ details }) {
  const { description, name, images, _id } = details;

  return (
    <Link to={`/feed/${_id}`}>
      <Box
        borderRadius='xl'
        overflow='hidden'
        width='25rem'
        height='20rem'
        position='relative'
        role='group'
        cursor='pointer'
        bg='red.200'
      >
        <PowstTagPill
          position='absolute'
          top={2}
          left={2}
          transition='ease-out 300ms'
          _groupHover={{ transform: 'translateY(-100%)' }}
          bg='#00000066'
          zIndex='2'
          text='project'
        />

        <Stack
          position='absolute'
          bottom={4}
          left={4}
          right={4}
          zIndex='2'
          color='white'
          transform='auto'
          transformOrigin='bottom'
          transition='all ease-out 300ms'
          translateY={'calc(100% - 2.5rem)'}
          _groupHover={{ transform: 'translateY(0%)' }}
        >
          <Heading>{name}</Heading>
          <Text noOfLines={5}>{description}</Text>
        </Stack>

        <Image
          src={images[0].src}
          alt={images[0].alt}
          w='100%'
          h='100%'
          objectFit='cover'
        />

        {/* hover items */}
        <Box
          w='100%'
          h='100%'
          bg='#00000066'
          position='absolute'
          inset='0'
          zIndex='1'
          display='none'
          _groupHover={{ display: 'block' }}
        />
      </Box>
    </Link>
  );
}
