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
  Heading,
} from '@chakra-ui/react';
import { useState } from 'react';
import { IComment } from '../../types/feed.type';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { commentPost } from '../../features/feed/feedActions';
import ProfilePicture from '../Images/ProfilePicture';

export default function MobileCommentPanel({
  postId,
  comments: staticComments,
}: {
  postId: string;
  comments: IComment[];
}) {
  const dispatch = useAppDispatch();

  const commentLoading = useAppSelector(
    (state) => state.feed.loading.commentLoading
  );
  const authStatus = useAppSelector((state) => state.auth.signInStatus);
  const authUser = useAppSelector((state) => state.auth.user);

  const [comments, setComments] = useState<IComment[]>(staticComments);
  const [comment, setComment] = useState<string>('');

  const handleComment = async () => {
    const response = await dispatch(
      commentPost({ postId, userId: authUser._id, commentText: comment })
    );

    if (response.meta.requestStatus === 'fulfilled') {
      setComments((prevComments) => [
        ...prevComments,

        response.payload.comments[response.payload.comments.length - 1],
      ]);

      setComment('');
    }
  };

  return (
    <Stack display={{ base: 'block', lg: 'none' }}>
      <Heading textAlign='left'>Comments</Heading>

      {comments?.map((comment) => (
        <Flex key={comment._id} gap={2}>
          <ProfilePicture
            src={comment.user?.profilePic?.src}
            alt={comment.user.name}
          />

          <Stack mt={1}>
            <Text fontWeight='600'>{comment.user.name}</Text>
            <Text>{comment.text}</Text>
          </Stack>
        </Flex>
      ))}

      {/* // TODO -  Make user profile as a new component */}
      {authStatus && (
        <Flex gap={2}>
          <Box
            w='2rem'
            h='2rem'
            borderRadius='full'
            position='relative'
            overflow='hidden'
          >
            <Image
              src={authUser?.profilePic?.src || '/images/blank_profile.png'}
              alt={authUser?.name}
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
              onClick={handleComment}
              isLoading={commentLoading}
              loadingText='Commenting...'
            >
              Comment
            </Button>
          </Stack>
        </Flex>
      )}
    </Stack>
  );
}

// TODO - Do not allow if the text is empty
