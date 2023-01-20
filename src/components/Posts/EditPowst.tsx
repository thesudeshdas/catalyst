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
        p={{ base: 0, md: 4, lg: 8 }}
        pt='4'
        overflowY='scroll'
        position='relative'
        borderTopRadius={{ base: 'xl', lg: '3xl' }}
        justifyContent='center'
        gap={{ base: 2, md: 4 }}
      >
        <PostNav
          likes={[]}
          comments={[]}
          creator={authUser}
          setShowComments={() => {}}
        />

        <Box
          gap={{ base: 0, md: 4, lg: 6 }}
          w={{ base: '87%', md: '70%' }}
          position='relative'
        >
          {/* user details & title */}
          <Flex
            gap={{ base: 1, md: 4 }}
            alignItems={{ md: 'center' }}
            direction={{ base: 'column', md: 'row' }}
            mb={4}
          >
            <Box display={{ base: 'none', md: 'block' }}>
              <ProfilePicture
                src={authUser?.profilePic?.src}
                alt={authUser?.name}
              />
            </Box>

            <Box>
              <Heading mb={{ base: 2, md: 6 }} textAlign='left'>
                Edit Powst
              </Heading>
              <InputGroup w={{ base: '90%', lg: '30rem' }}>
                <InputRightElement
                  pointerEvents='none'
                  children={<EditIcon />}
                />
                <Input
                  variant='filled'
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder='What did you make?'
                />
              </InputGroup>
            </Box>
          </Flex>

          {/* add images & videos */}
          <CarouselImage images={post.images} />

          {/* texts & stack & links */}
          <Flex my={4} direction={{ base: 'column', lg: 'row' }} gap={2}>
            <Stack w={{ base: '100%', lg: '60%' }}>
              <Heading size='md' textAlign='left'>
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

            <Stack w={{ base: '100%', lg: '25%' }} gap={10}>
              <Stack>
                <Heading size='md' textAlign='left'>
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
                <Heading size='md' textAlign='left'>
                  Edit tech stack
                </Heading>

                <SearchStack tags={stack} setTags={setStack} />
              </Stack>
            </Stack>
          </Flex>

          {/* separator */}
          <ProfileSeparator user={post.user} />

          <Flex position='absolute' right={0} gap={4} mt={6}>
            <Button variant='secondary' onClick={() => dispatch(toggle(''))}>
              Cancel
            </Button>
            <Button variant='primary' onClick={handleCreatePost}>
              Edit Powst
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
