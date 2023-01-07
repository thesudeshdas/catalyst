import * as React from 'react';
import { useEffect, useState } from 'react';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';
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
import {
  createPost,
  likePost,
  unlikePost,
} from '../../features/feed/feedActions';

export default function CreateSinglePowst() {
  const dispatch = useAppDispatch();

  const authUser = useAppSelector((state) => state.auth.user);

  const [imgSrc, setImgSrc] = useState<string[]>([]);
  const [projectName, setProjectName] = useState<string>('');
  const [projectDescription, setProjectDescription] = useState<string>('');
  const [projectLinks, setProjectLinks] = useState<{
    live: string;
    repo: string;
  }>({ live: '', repo: '' });

  const handleImgUpload = async (event) => {
    const file = event.target.files[0];
    const dataForm = new FormData();

    dataForm.append('file', file);
    dataForm.append('upload_preset', 'catalyst_preset');

    const data = await fetch(
      'https://api.cloudinary.com/v1_1/thesudeshdas/image/upload',
      {
        method: 'POST',
        body: dataForm,
      }
    ).then((r) => r.json());

    console.log({ data });

    if (data.secure_url) {
      setImgSrc((prevImgs) => [...prevImgs, data.secure_url]);
    }
  };

  const handleCreatePost = async () => {
    const response = await dispatch(
      createPost({
        user: authUser,
        name: projectName,
        description: projectDescription,
        images: imgSrc.map((img) => ({ src: img, alt: 'random' })),
        live: projectLinks.live,
        repo: projectLinks.repo,
      })
    );

    if (response.meta.requestStatus === 'fulfilled') {
      dispatch(toggle(''));
    }
  };

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
            <Image
              alt='profile'
              borderRadius='50%'
              src={authUser.profilePic.src || '/images/blank_profile.png'}
              width='65'
              height='65'
            />
            <Box>
              <Heading mb={4} size='lg'>
                Create a Powst
              </Heading>

              <Input
                variant='filled'
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder='What did you make?'
                w='30rem'
              />
            </Box>
          </Flex>

          {/* add images & videos */}
          {imgSrc.length > 0 ? (
            <Image
              alt='uploaded'
              src={imgSrc[0]}
              width={1125}
              height={750}
              borderRadius='2xl'
              objectFit='cover'
            />
          ) : (
            <Box position='relative' borderRadius='2xl'>
              <Button width='100%' height={750}>
                <Stack>
                  <Heading color='gray' size='4xl' mb={6}>
                    <AddIcon />
                  </Heading>
                  <Text color='gray'>
                    This will be the first thing that others will see.
                  </Text>

                  <Text color='gray'>Show something amazing here...</Text>
                </Stack>
              </Button>
              <Input
                type='file'
                height='100%'
                width='100%'
                position='absolute'
                top='0'
                left='0'
                opacity='0'
                aria-hidden='true'
                accept='image/*'
                onChange={handleImgUpload}
                cursor='pointer'
              />
            </Box>
          )}

          <Heading fontWeight='600' size='md'>
            Add more pictures and videos
          </Heading>

          {imgSrc && imgSrc.length > 0 ? (
            <Flex h='10rem' gap={4}>
              {imgSrc.map((img) => (
                <Center
                  w='15rem'
                  h='10rem'
                  overflow='hidden'
                  borderRadius='2xl'
                >
                  <Image
                    alt='uploaded'
                    src={img}
                    width={1125}
                    height={750}
                    objectFit='cover'
                    borderRadius='2xl'
                  />
                </Center>
              ))}

              <Box position='relative' borderRadius='2xl'>
                <Box w='15rem'>
                  <Button width='100%' height='10rem' borderRadius='2xl'>
                    <Heading color='gray' size='xl'>
                      <AddIcon />
                    </Heading>
                  </Button>
                </Box>
                <Input
                  type='file'
                  height='100%'
                  width='100%'
                  position='absolute'
                  top='0'
                  left='0'
                  opacity='0'
                  aria-hidden='true'
                  accept='image/*'
                  onChange={handleImgUpload}
                  cursor='pointer'
                />
              </Box>
            </Flex>
          ) : (
            <Flex gap={4}>
              <Box position='relative' borderRadius='2xl'>
                <Box w='15rem'>
                  <Button width='100%' height='10rem' borderRadius='2xl'>
                    <Heading color='gray' size='xl'>
                      <AddIcon />
                    </Heading>
                  </Button>
                </Box>
                <Input
                  type='file'
                  height='100%'
                  width='100%'
                  position='absolute'
                  top='0'
                  left='0'
                  opacity='0'
                  aria-hidden='true'
                  accept='image/*'
                  onChange={handleImgUpload}
                  cursor='pointer'
                />
              </Box>
              <Box position='relative' borderRadius='2xl'>
                <Box w='15rem'>
                  <Button width='100%' height='10rem' borderRadius='2xl'>
                    <Heading color='gray' size='xl'>
                      <AddIcon />
                    </Heading>
                  </Button>
                </Box>
                <Input
                  type='file'
                  height='100%'
                  width='100%'
                  position='absolute'
                  top='0'
                  left='0'
                  opacity='0'
                  aria-hidden='true'
                  accept='image/*'
                  onChange={handleImgUpload}
                  cursor='pointer'
                />
              </Box>
              <Box position='relative' borderRadius='2xl'>
                <Box w='15rem'>
                  <Button width='100%' height='10rem' borderRadius='2xl'>
                    <Heading color='gray' size='xl'>
                      <AddIcon />
                    </Heading>
                  </Button>
                </Box>
                <Input
                  type='file'
                  height='100%'
                  width='100%'
                  position='absolute'
                  top='0'
                  left='0'
                  opacity='0'
                  aria-hidden='true'
                  accept='image/*'
                  onChange={handleImgUpload}
                  cursor='pointer'
                />
              </Box>
              <Box position='relative' borderRadius='2xl'>
                <Box w='15rem'>
                  <Button width='100%' height='10rem' borderRadius='2xl'>
                    <Heading color='gray' size='xl'>
                      <AddIcon />
                    </Heading>
                  </Button>
                </Box>
                <Input
                  type='file'
                  height='100%'
                  width='100%'
                  position='absolute'
                  top='0'
                  left='0'
                  opacity='0'
                  aria-hidden='true'
                  accept='image/*'
                  onChange={handleImgUpload}
                  cursor='pointer'
                />
              </Box>
            </Flex>
          )}

          {/* texts & stack & links */}
          <Flex>
            <Stack w='60%'>
              <Heading fontWeight='600' size='md'>
                Add a Description
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
                  Add live links
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

              <Stack gap={2}>
                <Heading fontWeight='600' size='md'>
                  Add tech stack
                </Heading>

                <Flex wrap='wrap' gap={4}>
                  <IconButton
                    aria-label='add-icon'
                    size='lg'
                    icon={<AddIcon color='gray' />}
                    w='fit-content'
                  />
                  <IconButton
                    aria-label='add-icon'
                    size='lg'
                    icon={<AddIcon color='gray' />}
                    w='fit-content'
                  />
                  <IconButton
                    aria-label='add-icon'
                    size='lg'
                    icon={<AddIcon color='gray' />}
                    w='fit-content'
                  />
                  <IconButton
                    aria-label='add-icon'
                    size='lg'
                    icon={<AddIcon color='gray' />}
                    w='fit-content'
                  />
                </Flex>
              </Stack>
            </Stack>
          </Flex>

          {/* separator */}
          <Flex gap={4} alignItems='center'>
            <Divider bg='black' h={1} borderRadius='lg' />
            <Image
              borderRadius='50%'
              src={authUser.profilePic.src || '/images/blank_profile.png'}
              alt={authUser.name}
              width='200'
              height='200'
            />
            <Divider bg='black' h={1} borderRadius='lg' />
          </Flex>
          <Center>
            <Heading size='lg'>{authUser.name}</Heading>
          </Center>

          <Flex alignSelf='flex-end' gap={4}>
            <Button
              colorScheme='blue'
              variant='outline'
              fontWeight='500'
              onClick={() => dispatch(toggle(''))}
            >
              Cancel
            </Button>
            <Button
              colorScheme='blue'
              fontWeight='500'
              onClick={handleCreatePost}
            >
              Ready to Post
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
}
