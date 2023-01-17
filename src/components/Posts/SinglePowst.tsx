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
import { LikeIcon } from '../../assets/icons/icons';

import { promptLogin, toggle } from '../../features/modal/modalSlice';
import CommentPanel from '../Chats/CommentPanel';
import PostNav from '../Navs/PostNav';
import CreatorDetails from '../Profile/CreatorDetails';
import CarouselImage from '../Carousels/CarouselImage';
import ListTechStack from '../Lists/ListTechStack';

import { likePost, unlikePost } from '../../features/feed/feedActions';
import ProfileSeparator from '../Profile/ProfileSeparator';
import CTAButton from '../CTAs/CTAButton';
import BackdropSinglePost from '../Backdrops/Backdrop';
import { updateUserDetails } from '../../features/auth/authActions';

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

  const likeHandler = async () => {
    authStatus
      ? await dispatch(likePost({ postId: postId, userId: userId }))
      : dispatch(promptLogin());
  };

  const unlikeHandler = async () => {
    authStatus
      ? await dispatch(unlikePost({ postId: postId, userId: userId }))
      : dispatch(promptLogin());
  };

  const hasUserLiked = likes?.includes(userId);
  const hasUserSaved = authUser.savedPost?.includes(postId);

  console.log({ hasUserSaved });

  return (
    <Box bg='#00000080'>
      <BackdropSinglePost />

      {/* content */}
      <Flex
        direction='row-reverse'
        bg='white'
        height='calc(100vh - 3rem)'
        p={8}
        overflowY='scroll'
        position='relative'
        borderTopRadius='3xl'
        justifyContent='center'
        gap={4}
      >
        {showComments && (
          <CommentPanel comments={post.comments} postId={post._id} />
        )}

        <PostNav
          likes={post.likes}
          comments={post.comments}
          creator={post.user}
          setShowComments={setShowComments}
        />

        <Stack gap={6}>
          {/* user details */}
          <Flex gap={4} alignItems='center'>
            <CreatorDetails creator={post.user} postName={post.name} />

            <Spacer />

            {/* save & like */}
            {hasUserSaved ? (
              <Button variant='secondary' onClick={handleUnSavePost}>
                Saved
              </Button>
            ) : (
              <Button variant='secondary' onClick={handleSavePost}>
                Save
              </Button>
            )}

            {hasUserLiked ? (
              <Button
                // TODO - add outline icon for like
                leftIcon={<LikeIcon />}
                variant='secondary'
                onClick={unlikeHandler}
                isLoading={ctaLoading}
                loadingText='Unliking...'
              >
                Unlike
              </Button>
            ) : (
              <Button
                leftIcon={<LikeIcon />}
                variant='primary'
                onClick={likeHandler}
                isLoading={ctaLoading}
                loadingText='Liking...'
              >
                Like
              </Button>
            )}
          </Flex>

          <CarouselImage images={post.images} />

          {/* texts & stack & links */}
          <Flex>
            <Text w='60%'>{post.description}</Text>

            <Spacer />

            <Stack w='25%' alignItems='flex-end' gap={2}>
              {post.live != undefined && (
                <Button
                  variant='primary'
                  as='a'
                  w='70%'
                  href={post.live}
                  target='blank'
                >
                  Live Preview
                </Button>
              )}

              {post.repo != undefined && (
                <Button
                  variant='secondary'
                  as='a'
                  w='70%'
                  href={post.repo}
                  target='blank'
                >
                  Repo Link
                </Button>
              )}

              <ListTechStack
                stack={post.stack}
                direction='row-reverse'
                wrap='wrap'
                gap={4}
              />
            </Stack>
          </Flex>

          <ProfileSeparator user={post.user} />

          {/* similar */}
          {/* // TODO - Create & Add similar post component */}
        </Stack>
      </Flex>
    </Box>
  );
}
