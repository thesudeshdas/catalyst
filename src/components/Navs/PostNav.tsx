import { InfoIcon } from '@chakra-ui/icons';
import { Box, IconButton, Stack, Text } from '@chakra-ui/react';
import {
  CommentIcon,
  LikeIcon,
  SaveIcon,
  ShareIcon,
} from '../../assets/icons/icons';
import { IUser } from '../../types/auth.type';
import { IComment } from '../../types/feed.type';
import ProfilePicture from '../Images/ProfilePicture';

export default function PostNav({
  likes,
  comments,
  creator,
  setShowComments,
}: {
  likes: string[];
  comments: IComment[];
  creator: IUser;
  setShowComments: Function;
}) {
  return (
    <Stack
      gap={2}
      position='sticky'
      top='0'
      h='fit-content'
      alignItems='center'
    >
      <ProfilePicture
        src={creator.profilePic?.src}
        alt={creator.name}
        // size='3rem'
      />

      <Box position='relative'>
        <IconButton
          size={{ base: 'sm', md: 'md' }}
          w={{ base: '1rem', md: 4 }}
          aria-label='comment'
          icon={<CommentIcon boxSize={{ base: 4, md: 6 }} />}
          onClick={() => setShowComments((prev) => !prev)}
        />
        {comments?.length > 0 && (
          <Text
            fontSize={{ base: 'xs', md: 'md' }}
            position='absolute'
            top='-30%'
            right='-30%'
            bg='bg.primary'
            px={2}
            borderRadius='full'
          >
            {comments.length}
          </Text>
        )}
      </Box>
      <IconButton
        size={{ base: 'sm', md: 'md' }}
        w={{ base: '1rem', md: 4 }}
        aria-label='comment'
        icon={<ShareIcon boxSize={{ base: 4, md: 6 }} />}
      />
      <IconButton
        size={{ base: 'sm', md: 'md' }}
        w={{ base: '1rem', md: 4 }}
        aria-label='comment'
        icon={<InfoIcon boxSize={{ base: 4, md: 6 }} />}
      />
      <IconButton
        size={{ base: 'sm', md: 'md' }}
        w={{ base: '1rem', md: 4 }}
        aria-label='comment'
        icon={<SaveIcon boxSize={{ base: 4, md: 6 }} />}
      />

      <Box position='relative'>
        <IconButton
          size={{ base: 'sm', md: 'md' }}
          w={{ base: '1rem', md: 4 }}
          aria-label='like'
          icon={<LikeIcon boxSize={{ base: 4, md: 6 }} />}
        />
        {likes?.length > 0 && (
          <Text
            fontSize={{ base: 'xs', md: 'md' }}
            position='absolute'
            top='-30%'
            right='-30%'
            bg='bg.primary'
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
