import { InfoIcon } from '@chakra-ui/icons';
import { Box, IconButton, Stack, Text } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  CommentIcon,
  LikeIcon,
  SaveIcon,
  ShareIcon,
  UnlikeIcon,
  UnsaveIcon,
} from '../../assets/icons/icons';
import { updateUserDetails } from '../../features/auth/authActions';
import { likePost, unlikePost } from '../../features/feed/feedActions';
import { promptLogin } from '../../features/modal/modalSlice';
import { IUser } from '../../types/auth.type';
import { IComment } from '../../types/feed.type';
import ProfilePicture from '../Images/ProfilePicture';

export default function PostNav({
  postId,
  likes,
  comments,
  creator,
  setShowComments,
}: {
  postId?: string;
  likes: string[];
  comments: IComment[];
  creator: IUser;
  setShowComments: Function;
}) {
  const dispatch = useAppDispatch();

  const authUser = useAppSelector((state) => state.auth.user);
  const authStatus = useAppSelector((state) => state.auth.signInStatus);
  const ctaLoading = useAppSelector((state) => state.feed.loading.ctaLoading);

  const handleSavePost = async () => {
    if (authStatus) {
      const newSavedPost = [...authUser?.savedPost, postId];

      await dispatch(
        updateUserDetails({
          userId: authUser._id,
          toUpdate: { savedPost: newSavedPost },
        })
      );
    } else {
      dispatch(promptLogin());
    }
  };

  const handleUnSavePost = async () => {
    if (authStatus) {
      const newSavedPost = authUser?.savedPost.filter(
        (item) => item !== postId
      );

      await dispatch(
        updateUserDetails({
          userId: authUser._id,
          toUpdate: { savedPost: newSavedPost },
        })
      );
    } else {
      dispatch(promptLogin());
    }
  };

  const handleLike = async () => {
    authStatus
      ? await dispatch(likePost({ postId: postId, userId: authUser._id }))
      : dispatch(promptLogin());
  };

  const handleUnlike = async () => {
    authStatus
      ? await dispatch(unlikePost({ postId: postId, userId: authUser._id }))
      : dispatch(promptLogin());
  };

  const hasUserLiked = likes?.includes(authUser._id);
  const hasUserSaved = authUser.savedPost?.includes(postId);

  return (
    <Stack
      gap={2}
      position='sticky'
      top='0'
      h='fit-content'
      alignItems='center'
    >
      <ProfilePicture src={creator.profilePic?.src} alt={creator.name} />

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

      {hasUserSaved ? (
        <IconButton
          variant='secondary'
          onClick={handleUnSavePost}
          isLoading={ctaLoading}
          size={{ base: 'sm', md: 'md' }}
          w={{ base: '1rem', md: 4 }}
          aria-label='comment'
          icon={<SaveIcon boxSize={{ base: 4, md: 6 }} />}
        />
      ) : (
        <IconButton
          variant='secondary'
          onClick={handleSavePost}
          isLoading={ctaLoading}
          size={{ base: 'sm', md: 'md' }}
          w={{ base: '1rem', md: 4 }}
          aria-label='comment'
          icon={<UnsaveIcon boxSize={{ base: 4, md: 6 }} />}
        />
      )}

      {hasUserLiked ? (
        <Box position='relative'>
          <IconButton
            variant='secondary'
            onClick={handleUnlike}
            isLoading={ctaLoading}
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
      ) : (
        <IconButton
          variant='secondary'
          onClick={handleLike}
          isLoading={ctaLoading}
          size={{ base: 'sm', md: 'md' }}
          w={{ base: '1rem', md: 4 }}
          aria-label='like'
          icon={<UnlikeIcon boxSize={{ base: 4, md: 6 }} />}
        />
      )}
    </Stack>
  );
}
