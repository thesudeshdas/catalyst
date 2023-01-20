import { useState } from 'react';
import { CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  LikeIcon,
  SaveIcon,
  UnlikeIcon,
  UnsaveIcon,
} from '../../assets/icons/icons';

import { promptLogin, toggle } from '../../features/modal/modalSlice';
import CommentPanel from '../Panels/CommentPanel';
import PostNav from '../Navs/PostNav';
import CreatorDetails from '../Profile/CreatorDetails';
import CarouselImage from '../Carousels/CarouselImage';
import ListTechStack from '../Lists/ListTechStack';

import { likePost, unlikePost } from '../../features/feed/feedActions';
import ProfileSeparator from '../Profile/ProfileSeparator';
import CTAButton from '../CTAs/CTAButton';
import BackdropSinglePost from '../Backdrops/Backdrop';
import { updateUserDetails } from '../../features/auth/authActions';
import MobileCommentPanel from '../Panels/MobileCommentPanel';

export default function SinglePowst({ postId }) {
  const dispatch = useAppDispatch();

  const authUser = useAppSelector((state) => state.auth.user);
  const authStatus = useAppSelector((state) => state.auth.signInStatus);
  const ctaLoading = useAppSelector((state) => state.feed.loading.ctaLoading);
  const post = useAppSelector((state) =>
    state.feed.posts.find((post) => post._id == postId)
  );

  const { likes } = post;

  const [showComments, setShowComments] = useState<boolean>(false);

  const userId = useAppSelector((state) => state.auth.user?._id);

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
      ? await dispatch(likePost({ postId: postId, userId: userId }))
      : dispatch(promptLogin());
  };

  const handleUnlike = async () => {
    authStatus
      ? await dispatch(unlikePost({ postId: postId, userId: userId }))
      : dispatch(promptLogin());
  };

  const hasUserLiked = likes?.includes(userId);
  const hasUserSaved = authUser?.savedPost?.includes(postId);

  return (
    <Box bg='#00000080'>
      <BackdropSinglePost />

      {/* content */}
      <Flex
        direction='row-reverse'
        bg='bg.primary'
        height='calc(100vh - 3rem)'
        p={{ base: 0, md: 4, lg: 8 }}
        pt='4'
        overflowY='scroll'
        position='relative'
        borderTopRadius={{ base: 'xl', lg: '3xl' }}
        justifyContent='center'
        gap={{ base: 2, md: 4 }}
      >
        {showComments && (
          <CommentPanel comments={post.comments} postId={post._id} />
        )}

        <PostNav
          postId={postId}
          likes={post.likes}
          comments={post.comments}
          creator={post.user}
          setShowComments={setShowComments}
        />

        <Box gap={{ base: 0, md: 4, lg: 6 }} w={{ base: '87%', md: '70%' }}>
          {/* user details */}
          <Flex
            gap={{ base: 1, md: 4 }}
            alignItems={{ md: 'center' }}
            direction={{ base: 'column', md: 'row' }}
            mb={{ base: 0, md: 4 }}
          >
            <CreatorDetails creator={post.user} postName={post.name} />

            <Spacer />

            {/* save & like */}
            <Flex gap={4} display={{ base: 'none', lg: 'flex' }}>
              {hasUserSaved ? (
                <Button
                  leftIcon={<UnsaveIcon />}
                  size={{ base: 'sm', lg: 'md' }}
                  variant='secondary'
                  onClick={handleUnSavePost}
                >
                  Saved
                </Button>
              ) : (
                <Button
                  leftIcon={<UnsaveIcon />}
                  size={{ base: 'sm', lg: 'md' }}
                  variant='secondary'
                  onClick={handleSavePost}
                >
                  Save
                </Button>
              )}

              {hasUserLiked ? (
                <Button
                  // TODO - add outline icon for like
                  leftIcon={<UnlikeIcon />}
                  size={{ base: 'sm', lg: 'md' }}
                  variant='secondary'
                  onClick={handleUnlike}
                  isLoading={ctaLoading}
                  loadingText='Unliking...'
                >
                  Unlike
                </Button>
              ) : (
                <Button
                  leftIcon={<LikeIcon />}
                  size={{ base: 'sm', lg: 'md' }}
                  variant='primary'
                  onClick={handleLike}
                  isLoading={ctaLoading}
                  loadingText='Liking...'
                >
                  Like
                </Button>
              )}
            </Flex>
          </Flex>

          <CarouselImage images={post.images} />

          {/* texts & stack & links */}
          <Flex
            mt={4}
            mb={12}
            direction={{ base: 'column', md: 'row' }}
            gap={4}
          >
            <Text w={{ base: '100%', md: '60%' }}>{post.description}</Text>

            <Spacer />

            <Stack
              w={{ base: '100%', md: '30%' }}
              alignItems={{ base: 'flex-start', md: 'flex-end' }}
              gap={2}
            >
              {post.live !== undefined && (
                <Button
                  variant='primary'
                  as='a'
                  w={{ base: '50%', md: '70%' }}
                  href={post.live}
                  target='blank'
                  size={{ base: 'sm', lg: 'md' }}
                >
                  Live Preview
                </Button>
              )}

              {post.repo != undefined && (
                <Button
                  variant='secondary'
                  as='a'
                  w={{ base: '50%', md: '70%' }}
                  href={post.repo}
                  target='blank'
                  size={{ base: 'sm', lg: 'md' }}
                >
                  Repo Link
                </Button>
              )}

              <ListTechStack
                stack={post.stack}
                direction={{ base: 'row', md: 'row-reverse' }}
                wrap='wrap'
                gap={4}
              />
            </Stack>
          </Flex>

          {showComments && (
            <MobileCommentPanel comments={post.comments} postId={post._id} />
          )}

          <ProfileSeparator user={post.user} />

          {/* similar */}
          {/* // TODO - Create & Add similar post component */}
        </Box>
      </Flex>
    </Box>
  );
}
