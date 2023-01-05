import * as React from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  InputGroup,
  Stack,
  Text,
  Image,
  Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
import { IComment } from '../../types/feed.type';
import { useAppSelector } from '../../app/hooks';

export default function CommentPanel({ postId, comments: staticComments }) {
  const authUser = useAppSelector((state) => state.auth.user);

  const [comments, setComments] = useState<IComment[]>(staticComments);
  const [comment, setComment] = useState<string>('');

  // const handleComment = async () => {
  //   const response = await commentPost(postId, session?.user.id, comment);

  //   if (response.comments.length > comments.length) {
  //     setComments((prevComments) => [
  //       ...prevComments,
  //       response.comments[response.comments.length - 1],
  //     ]);
  //     setComment('');
  //   }
  // };

  console.log({ comments });

  return (
    <Stack
      w='25%'
      h='fit-content'
      position='sticky'
      top={3}
      borderLeft='2px solid black'
      px={3}
      gap={2}
    >
      {comments?.map((comment) => (
        <Flex key={comment._id} gap={2}>
          <Box
            w='2rem'
            h='2rem'
            borderRadius='full'
            position='relative'
            overflow='hidden'
          >
            <Image
              src={comment.user?.profilePic?.src || '/images/blank_profile.png'}
              alt={comment.user.name}
              objectFit='cover'
              w='100%'
              h='100%'
            />
          </Box>

          <Stack w='calc(100% - 3rem)' mt={1}>
            <Text fontWeight='600'>{comment.user.name}</Text>
            <Text>{comment.text}</Text>
          </Stack>
        </Flex>
      ))}

      {/* // TODO -  Make user profile as a new component */}
      <Flex gap={2}>
        <Box
          w='2rem'
          h='2rem'
          borderRadius='full'
          position='relative'
          overflow='hidden'
        >
          <Image
            src={authUser.profilePic?.src || '/images/blank_profile.png'}
            alt={authUser.name}
            objectFit='cover'
          />
        </Box>

        <Stack w='calc(100% - 3rem)' mt={1}>
          {/* <Text fontWeight='600'>{session?.user.name}</Text> */}
          <FormControl>
            <InputGroup>
              <Textarea
                value={comment}
                placeholder={'Say something nice'}
                onChange={(e) => setComment(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          <Button
            variant='primary'
            w='50%'
            alignSelf='flex-end'
            // onClick={handleComment}
          >
            Comment
          </Button>
        </Stack>
      </Flex>
    </Stack>
  );
}
