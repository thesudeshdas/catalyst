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
      top={3}
      w='4rem'
      h='fit-content'
      alignItems='center'
    >
      <ProfilePicture
        src={creator.profilePic?.src}
        alt={creator.name}
        size='3rem'
      />

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
