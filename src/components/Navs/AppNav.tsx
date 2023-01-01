import * as React from 'react';
import { Box, Flex, Image, Spacer, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function AppNav() {
  return (
    <Flex alignItems='center' p={4} gap={4} top='0' left='0' position='sticky'>
      <Link to='/feed'>
        <Flex
          alignItems='center'
          className='box-0'
          position='relative'
          w='32px'
          h='32px'
          overflow='hidden'
          _hover={{ width: '7.5rem' }}
          transform='auto'
          transition='all 300ms ease-in-out'
          cursor='pointer'
        >
          <Box
            bg='white'
            display='inline-block'
            className='box-1'
            position='absolute'
            left='0'
            top='0'
            zIndex={1}
          >
            <Image src='/icons/neutral/lightbulb.svg' alt='Light bulb' />
          </Box>
          <Text position='absolute' right='0'>
            Inspiration
          </Text>
        </Flex>
      </Link>

      <Link to='/profile'>
        <Flex
          alignItems='center'
          className='box-0'
          position='relative'
          w='32px'
          h='32px'
          overflow='hidden'
          _hover={{ width: '6.5rem' }}
          transform='auto'
          transition='all 300ms ease-in-out'
          cursor='pointer'
        >
          <Box
            bg='white'
            display='inline-block'
            className='box-1'
            position='absolute'
            left='0'
            top='0'
            zIndex={1}
          >
            <Image src='/icons/neutral/briefcase.svg' alt='briefcase' />
          </Box>
          <Text position='absolute' right='0'>
            Portfolio
          </Text>
        </Flex>
      </Link>

      <Link to='/sign-in'>
        <Flex
          alignItems='center'
          position='relative'
          w='32px'
          h='32px'
          overflow='hidden'
          _hover={{ width: '5.5rem' }}
          transform='auto'
          transition='all 300ms ease-in-out'
          cursor='pointer'
        >
          <Box
            bg='white'
            display='inline-block'
            className='box-1'
            position='absolute'
            left='0'
            top='0'
            zIndex={1}
          >
            <Image src='/icons/neutral/plus.svg' alt='Plus' />
          </Box>
          <Text position='absolute' right='0'>
            Create
          </Text>
        </Flex>
      </Link>

      <Spacer />
      <Image
        src='/icons/neutral/search.svg'
        alt='search'
        width='32px'
        height='32px'
      />

      <Link to='/'>
        <Flex
          alignItems='center'
          position='relative'
          w='32px'
          h='32px'
          overflow='hidden'
          _hover={{ width: '5.5rem' }}
          transform='auto'
          transition='all 300ms ease-in-out'
          cursor='pointer'
        >
          <Box
            bg='white'
            display='inline-block'
            className='box-1'
            position='absolute'
            left='0'
            top='0'
            zIndex={1}
          >
            <Image src='/icons/brand/catalystShort.svg' alt='Plus' />
          </Box>
          <Text position='absolute' right='0'>
            Create
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
}
