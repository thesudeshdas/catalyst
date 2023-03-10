import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  SlideFade,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { PowstCard } from '../../components';

import useDocumentTitle from '../../lib/hooks/useDocumentTitle';

export default function PageHome() {
  useDocumentTitle('Catalyst | Home');

  const posts = useAppSelector((state) => state.feed.posts);

  const [showInspire, setShowInspire] = useState<boolean>(false);
  const [showInspired, setShowInspired] = useState<boolean>(false);

  return (
    <>
      <Stack alignItems='center' gap={{ lg: 2 }}>
        <Heading>Built Something Amazing?</Heading>

        <Flex
          gap={{ base: 2, lg: 4 }}
          direction={{ base: 'column', lg: 'row' }}
        >
          <Heading color='brand.600'>
            <Link to='/feed'>SHOW OFF</Link>
          </Heading>
          <Heading>to the World Right Now</Heading>
        </Flex>
      </Stack>

      <Center mt={{ base: 4, lg: 8 }}>
        <Link to='/feed'>
          <Button variant='primary' fontSize='lg' margin='0 auto'>
            Let's Go 🔥
          </Button>
        </Link>
      </Center>

      <Heading mt={12} display={{ base: 'block', lg: 'none' }}>
        How Catalyst works
      </Heading>

      <Center mt={{ base: 4, lg: 24 }}>
        <Flex
          gap={{ base: 2, lg: 8 }}
          w={{ base: '80%', md: '60%', lg: '80%' }}
          alignItems='center'
          direction={{ base: 'column', lg: 'row' }}
        >
          <Image
            src='/images/chemistry.jpg'
            w={{ base: '100%', lg: '40%' }}
            objectFit='cover'
            borderRadius='2xl'
          />

          <Stack>
            <Heading display={{ base: 'none', lg: 'block' }} textAlign='left'>
              How Catalyst Works?
            </Heading>
            <Text
              fontSize='2xl'
              fontWeight='600'
              color='brand.600'
              textAlign={{ base: 'center', lg: 'left' }}
            >
              Resume + Portfolio + Catalyst = Jobs Easy Peasy
            </Text>

            <Box textAlign={{ base: 'center', lg: 'left' }}>
              <Text display='inline' fontWeight='600'>
                YOU
              </Text>{' '}
              are more than your resume. We believe Developers should be judged
              on their knowledge and proof of work rather than their education.
              With{' '}
              <Text display='inline' fontWeight='600'>
                CATALYST
              </Text>
              , easily showcase your proof of work to your next recruiter. 🚀🚀
            </Box>
          </Stack>
        </Flex>
      </Center>

      <Center mt={{ base: 12, lg: 24 }}>
        <Stack
          alignItems='center'
          gap={2}
          w={{ base: '100%', md: '60%', lg: '80%', xl: '55%' }}
        >
          <Heading>Proof of Work</Heading>

          <Text
            fontSize={{ lg: 'lg' }}
            textAlign='center'
            w={{ base: '70%', md: '40%', lg: '80%' }}
          >
            Here are some by our top developers.{' '}
            <Link to='/feed' className='react-router-link'>
              Check out everything else
            </Link>
          </Text>

          {/* // TODO - Change this to Carousel */}
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              lg: 'repeat(2, 1fr)',
              xl: 'repeat(3, 1fr)',
            }}
            column={3}
            my={8}
            gap={4}
            justifyItems='center'
            alignItems='center'
          >
            {posts.slice(0, 3).map((post) => (
              <GridItem key={post._id}>
                <PowstCard details={post} />
              </GridItem>
            ))}
          </Grid>
        </Stack>
      </Center>

      {/* // TODO - create a different component for mobile */}
      <Center mb={100} display={{ base: 'none', lg: 'flex' }}>
        <Flex transform='auto' alignItems='center'>
          <Stack
            transform='auto'
            transformOrigin='bottom'
            translateY='45%'
            h='fit-content'
            transition='all ease-out 300ms'
            role='group'
            onMouseEnter={() => setShowInspire(true)}
            onMouseLeave={() => setShowInspire(false)}
            cursor='pointer'
          >
            <Heading textAlign='right' _groupHover={{ color: 'brand.600' }}>
              WANNA
            </Heading>
            <Heading
              size='3xl'
              textAlign='right'
              _groupHover={{ color: 'brand.600' }}
            >
              INSPIRE
            </Heading>

            <SlideFade in={showInspire} offsetY='50px'>
              <Stack alignItems='flex-end' mt={4}>
                <Text w='20rem' textAlign='right' fontWeight='600'>
                  Built Projects you think can impress? Create POWST (Proof of
                  Work Post) to for other developers to see
                </Text>

                <Link to='/feed'>
                  <Button variant='primary' fontSize='lg' margin='0 auto'>
                    Let's Go 🔥
                  </Button>
                </Link>
              </Stack>
            </SlideFade>
          </Stack>

          <Text fontSize='20rem' fontWeight='400' color='brand.600'>
            I
          </Text>

          <Stack
            transform='auto'
            transformOrigin='bottom'
            translateY='45%'
            h='fit-content'
            transition='all ease-out 300ms'
            role='group'
            onMouseEnter={() => setShowInspired(true)}
            onMouseLeave={() => setShowInspired(false)}
            cursor='pointer'
          >
            <Heading textAlign='left' _groupHover={{ color: 'brand.600' }}>
              AM
            </Heading>
            <Heading
              size='3xl'
              textAlign='left'
              _groupHover={{ color: 'brand.600' }}
            >
              INSPIRED
            </Heading>

            <SlideFade in={showInspired} offsetY='50px'>
              <Stack mt={4}>
                <Text w='20rem' textAlign='left' fontWeight='600'>
                  See something that you like? Hit up the Creator and
                  Collaborate on your next project together
                </Text>

                <Link to='/feed'>
                  <Button variant='primary' fontSize='lg' margin='0 auto'>
                    Get in Touch ☕
                  </Button>
                </Link>
              </Stack>
            </SlideFade>
          </Stack>
        </Flex>
      </Center>
    </>
  );
}
