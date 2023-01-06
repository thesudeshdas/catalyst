import * as React from 'react';
import { useEffect, useState } from 'react';
import { CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  chakra,
  Divider,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  CommentIcon,
  InfoIcon,
  LikeIcon,
  SaveIcon,
  ShareIcon,
} from '../../assets/icons/icons';
import { techStackIcons } from '../../data/portfolio/portfolio.data';
import { toggle } from '../../features/modal/modalSlice';
import CommentPanel from '../Chats/CommentPanel';
import PostNav from '../Navs/PostNav';
import CreatorDetails from '../Profile/CreatorDetails';
import CarouselImage from '../Carousels/CarouselImage';
import ListTechStack from '../Lists/ListTechStack';
import { IPost } from '../../types/feed.type';
import { getPostDetails } from '../../lib/api/posts.api';
import { likePost } from '../../features/feed/feedActions';

export default function SinglePowst({ postId }) {
  const dispatch = useAppDispatch();

  const [post, setPost] = useState<IPost>();

  const [showComments, setShowComments] = useState<boolean>(false);
  const [likes, setLikes] = useState<string[]>(post?.likes);

  const userId = useAppSelector((state) => state.auth.user._id);

  // const post = useAppSelector((state) =>
  //   state.feed.posts.find((item) => item._id == details._id)
  // );

  const likeHandler = async () => {
    const response = await dispatch(
      likePost({ postId: postId, userId: userId })
    );

    response && setLikes(response.payload?.likes);
  };

  // const unlikeHandler = (postId) => {
  //   dispatch(unlikePost({ postId: postId, userId: userId }));
  // };

  const hasUserLiked = likes?.includes(userId);
  // const hasUserLiked = true;

  // console.log({ post });

  useEffect(() => {
    (async () => {
      const response = await getPostDetails(postId);

      if (response.status === 200) {
        setPost(response.data.post);
        setLikes(response.data.post.likes);
      }
    })();
  }, [postId]);

  console.log({ postId, post, likes });

  return (
    <Box bg='#00000080'>
      <Flex
        direction='row-reverse'
        onClick={() => dispatch(toggle(''))}
        h='3rem'
        p={2}
      >
        <Center>
          <IconButton
            aria-label='Close Single Powst'
            icon={<CloseIcon />}
            variant='ghost'
            color='white'
          />
        </Center>
      </Flex>

      {/* content */}
      {post ? (
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
              <Button variant='ghost'>Save</Button>
              {hasUserLiked ? (
                <Button
                  // TODO - add outline icon for like
                  leftIcon={<LikeIcon />}
                  variant='secondary'
                  // onClick={() => unlikeHandler(_id)}
                >
                  Unlike
                </Button>
              ) : (
                <Button
                  leftIcon={<LikeIcon />}
                  variant='primary'
                  onClick={likeHandler}
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

            {/* separator */}
            {/* // TODO - Take separtor outside as separate component  */}
            <Flex gap={4} alignItems='center'>
              <Divider bg='black' h={1} borderRadius='lg' />
              <Image
                borderRadius='50%'
                src={post.user.image}
                alt={post.user.name}
                width='200'
                height='200'
              />
              <Divider bg='black' h={1} borderRadius='lg' />
            </Flex>
            <Center>
              <Heading size='lg'>{post.user.name}</Heading>
            </Center>

            {/* similar */}
            {/* // TODO - Create & Add similar post component */}
          </Stack>
        </Flex>
      ) : (
        <Box
          bg='white'
          height='calc(100vh - 3rem)'
          p={4}
          overflowY='scroll'
          position='relative'
          borderTopRadius='2xl'
        >
          <Heading>Nothing to show</Heading>
        </Box>
      )}
    </Box>
  );
}
