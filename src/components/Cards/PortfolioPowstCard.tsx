import { EditIcon, StarIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import PowstTagPill from '../Pills/PowstTagPill';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { toggle } from '../../features/modal/modalSlice';

export default function PortfolioPowstCard({
  details,
  handleUnstarPost,
  handleStarPost,
  starredPost,
}) {
  const dispatch = useAppDispatch();

  const { description, name, images, _id } = details;

  const isPostStarred = starredPost?.includes(_id);

  return (
    <Box
      borderRadius='xl'
      overflow='hidden'
      width='25rem'
      height='20rem'
      position='relative'
      role='group'
      cursor='pointer'
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
      <Flex position='absolute' top={0} right={0} gap={1}>
        <Link to={`/feed/${_id}/edit-powst`}>
          <IconButton
            bg='#00000066'
            zIndex='2'
            colorScheme='whiteAlpha'
            variant='ghost'
            aria-label='featured'
            icon={<EditIcon color='white' />}
          />
        </Link>

        {isPostStarred ? (
          <IconButton
            bg='#00000066'
            zIndex='2'
            colorScheme='whiteAlpha'
            variant='ghost'
            aria-label='featured'
            icon={<StarIcon color='gold' />}
            onClick={() => handleUnstarPost(_id)}
          />
        ) : (
          <IconButton
            bg='#00000066'
            zIndex='2'
            colorScheme='whiteAlpha'
            variant='ghost'
            aria-label='featured'
            icon={<StarIcon color='white' />}
            onClick={() => handleStarPost(_id)}
          />
        )}
      </Flex>

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
        onClick={() =>
          dispatch(
            toggle({
              modalComponent: 'SinglePowst',
              modalData: { postId: _id },
            })
          )
        }
      />
    </Box>
  );
}
