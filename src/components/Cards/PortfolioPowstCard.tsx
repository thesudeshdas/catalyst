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
import { useAppDispatch } from '../../app/hooks';
import { toggle } from '../../features/modal/modalSlice';
import { useUserDetails } from '../Layouts/ProfileLayout';
import { IPost } from '../../types/feed.type';

export default function PortfolioPowstCard({ details }: { details: IPost }) {
  const dispatch = useAppDispatch();

  const { starredPost, handleStarPost, handleUnstarPost } = useUserDetails();

  const { description, name, images, _id } = details;

  const isPostStarred = starredPost?.includes(_id);

  return (
    <Box
      borderRadius='xl'
      overflow='hidden'
      width={{ base: '22.5rem', lg: '25rem' }}
      height={{ base: '18rem', lg: '20rem' }}
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
        <IconButton
          bg='#00000066'
          zIndex='2'
          colorScheme='whiteAlpha'
          variant='ghost'
          aria-label='featured'
          icon={<EditIcon color='white' />}
          onClick={() =>
            dispatch(
              toggle({
                modalComponent: 'EditPowst',
                modalData: { post: details },
              })
            )
          }
        />

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
        translateY={'calc(100% - 1.5rem)'}
        _groupHover={{ transform: 'translateY(0%)' }}
      >
        <Heading textAlign='left'>{name}</Heading>
        <Text noOfLines={5}>{description}</Text>
      </Stack>

      <Image
        src={images[0]?.src}
        alt={images[0]?.alt}
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
