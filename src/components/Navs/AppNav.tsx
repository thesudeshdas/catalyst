import { Flex, Image, Spacer, Text } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { toggle } from '../../features/modal/modalSlice';

export default function AppNav() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const authStatus = useAppSelector((state) => state.auth.signInStatus);
  const authUserId = useAppSelector((state) => state.auth.user?._id);

  const handleCreate = () => {
    authStatus
      ? dispatch(
          toggle({
            modalComponent: 'CreateSinglePowst',
          })
        )
      : navigate('/sign-in');
  };

  return (
    <Flex
      alignItems='center'
      p={4}
      gap={4}
      top='0'
      left='0'
      position='sticky'
      maxW='100vw'
    >
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
          <Image
            bg='white'
            display='inline-block'
            position='absolute'
            zIndex={1}
            left='0'
            top='0'
            h='100%'
            src='/icons/neutral/lightbulb.svg'
            alt='Light bulb'
          />
          <Text position='absolute' right='0' fontWeight='600'>
            Inspiration
          </Text>
        </Flex>
      </Link>

      <Link
        to={`/${authUserId}/portfolio`}
        state={{ userIdFromURL: authUserId }}
      >
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
          <Image
            bg='white'
            display='inline-block'
            position='absolute'
            zIndex={1}
            left='0'
            top='0'
            h='100%'
            src='/icons/neutral/briefcase.svg'
            alt='briefcase'
          />
          <Text position='absolute' right='0' fontWeight='600'>
            Portfolio
          </Text>
        </Flex>
      </Link>

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
        onClick={handleCreate}
      >
        <Image
          bg='white'
          display='inline-block'
          position='absolute'
          zIndex={1}
          left='0'
          top='0'
          h='100%'
          src='/icons/neutral/plus.svg'
          alt='Plus'
        />
        <Text position='absolute' right='0' fontWeight='600'>
          Create
        </Text>
      </Flex>

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
          _hover={{ width: '6.5rem' }}
          transform='auto'
          transition='all 300ms ease-in-out'
          cursor='pointer'
        >
          <Image
            bg='white'
            display='inline-block'
            position='absolute'
            zIndex={1}
            left='0'
            top='0'
            h='100%'
            src='/icons/brand/catalystShort.svg'
            alt='Plus'
          />

          <Text position='absolute' right='0' fontWeight='600'>
            Catalyst
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
}
