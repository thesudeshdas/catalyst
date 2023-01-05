import * as React from 'react';
import { InfoIcon } from '@chakra-ui/icons';
import { Box, IconButton, Stack, Text, Image } from '@chakra-ui/react';
import {
  CommentIcon,
  LikeIcon,
  SaveIcon,
  ShareIcon,
} from '../../assets/icons/icons';

// TODO - Add types

export default function PostNav({ likes, comments, creator, setShowComments }) {
  return (
    <Stack
      gap={2}
      position='sticky'
      top={3}
      w='4rem'
      h='fit-content'
      alignItems='center'
    >
      {creator && (
        <Image
          borderRadius='50%'
          src={creator.profilePic?.src || '/images/blank_profile.png'}
          alt={creator.name}
          width='50'
          height='50'
        />
      )}

      <Box position='relative'>
        <IconButton
          aria-label='like'
          icon={<CommentIcon boxSize={6} />}
          onClick={() => setShowComments((prev) => !prev)}
        />
        {comments?.length > 0 && (
          <Text
            position='absolute'
            top='-30%'
            right='-30%'
            bg='white'
            px={2}
            borderRadius='full'
          >
            {comments.length}
          </Text>
        )}
      </Box>
      <IconButton aria-label='comment' icon={<ShareIcon boxSize={6} />} />
      <IconButton
        aria-label='comment'
        icon={<InfoIcon boxSize={6} color='black' />}
      />
      <IconButton aria-label='comment' icon={<SaveIcon boxSize={6} />} />

      <Box position='relative'>
        <IconButton aria-label='like' icon={<LikeIcon boxSize={6} />} />
        {likes?.length > 0 && (
          <Text
            position='absolute'
            top='-30%'
            right='-30%'
            bg='white'
            px={2}
            borderRadius='full'
          >
            {likes.length}
          </Text>
        )}
      </Box>
    </Stack>
  );
}
