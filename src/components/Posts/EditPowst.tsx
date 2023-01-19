import * as React from 'react';
import { useEffect, useState } from 'react';
import { AddIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
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
  Input,
  Textarea,
  FormControl,
  InputGroup,
  InputRightElement,
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
import CommentPanel from '../Panels/CommentPanel';
import PostNav from '../Navs/PostNav';
import CreatorDetails from '../Profile/CreatorDetails';
import CarouselImage from '../Carousels/CarouselImage';
import ListTechStack from '../Lists/ListTechStack';
import { IPost } from '../../types/feed.type';

import {
  createPost,
  editPost,
  likePost,
  unlikePost,
} from '../../features/feed/feedActions';
import SearchStack from '../Search/SearchStack';
import { IStack } from '../../types/auth.type';
import ProfileSeparator from '../Profile/ProfileSeparator';
import ProfilePicture from '../Images/ProfilePicture';
import { Link } from 'react-router-dom';
import BackdropSinglePost from '../Backdrops/Backdrop';

export default function EditPowst({ post }) {
  const dispatch = useAppDispatch();

  const authUser = useAppSelector((state) => state.auth.user);

  const [projectName, setProjectName] = useState<string>(post.name);
  const [projectDescription, setProjectDescription] = useState<string>(
    post.description
  );
  const [projectLinks, setProjectLinks] = useState<{
    live: string;
    repo: string;
  }>({ live: post.live, repo: post.repo });
  const [stack, setStack] = useState<IStack[]>(post.stack);

  const handleCreatePost = async () => {
    const response = await dispatch(
      editPost({
        postId: post._id,
        toUpdate: {
          name: projectName,
          description: projectDescription,
          live: projectLinks.live,
          repo: projectLinks.repo,
          stack: stack,
        },
      })
    );

    if (response.meta.requestStatus === 'fulfilled') {
      dispatch(toggle(''));
    }
  };

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
        <PostNav
          likes={[]}
          comments={[]}
          creator={authUser}
          setShowComments={() => {}}
        />

        <Stack w='80em' gap={6}>
          {/* user details & title */}
          <Flex gap={4} alignItems='center'>
            <ProfilePicture
              src={post.user.profilePic?.src}
              alt={post.user.name}
            />

            <Stack>
              <Heading size='lg'>Edit Powst</Heading>
              <InputGroup>
                <InputRightElement
                  pointerEvents='none'
                  children={<EditIcon />}
                />
                <Input
                  variant='filled'
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder='What did you make?'
                  w='30rem'
                />
              </InputGroup>
            </Stack>
          </Flex>

          {/* add images & videos */}
          <CarouselImage images={post.images} />

          {/* texts & stack & links */}
          <Flex>
            <Stack w='60%'>
              <Heading fontWeight='600' size='md'>
                Edit Description
              </Heading>

              <Textarea
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                variant='filled'
                placeholder='Describe about the project'
                h='100%'
                resize='none'
              />
            </Stack>

            <Spacer />

            <Stack w='25%' gap={10}>
              <Stack gap={2}>
                <Heading fontWeight='600' size='md'>
                  Edit live link
                </Heading>

                <Input
                  variant='filled'
                  value={projectLinks.live}
                  onChange={(e) =>
                    setProjectLinks((prevLinks) => ({
                      ...prevLinks,
                      live: e.target.value,
                    }))
                  }
                  placeholder='Live link'
                />

                <Input
                  value={projectLinks.repo}
                  onChange={(e) =>
                    setProjectLinks((prevLinks) => ({
                      ...prevLinks,
                      repo: e.target.value,
                    }))
                  }
                  variant='filled'
                  placeholder='Repo link'
                />
              </Stack>

              {/* tech stack */}
              <Stack>
                <Heading fontWeight='600' size='md'>
                  Edit tech stack
                </Heading>

                <SearchStack tags={stack} setTags={setStack} />
              </Stack>
            </Stack>
          </Flex>

          {/* separator */}
          <ProfileSeparator user={post.user} />

          <Flex alignSelf='flex-end' gap={4}>
            <Button variant='secondary' onClick={() => dispatch(toggle(''))}>
              Cancel
            </Button>
            <Button variant='primary' onClick={handleCreatePost}>
              Edit Powst
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
}
