import {
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
      <Stack alignItems='center' gap={2}>
        <Heading size='xl'>Built Something Amazing?</Heading>

        <Flex gap={4}>
          <Heading size='xl' color='brand.600'>
            <Link to='/feed'>SHOW OFF</Link>
          </Heading>
          <Heading size='xl'>to the World Right Now</Heading>
        </Flex>
      </Stack>

      <Center mt={8}>
        <Link to='/feed'>
          <Button variant='primary' fontSize='lg' margin='0 auto'>
            Let's Go 🔥
          </Button>
        </Link>
      </Center>

      <Center mt={24}>
        <Flex gap={8} w='60vw' alignItems='center'>
          <Image
            src='/images/chemistry.jpg'
            w='30rem'
            objectFit='cover'
            borderRadius='2xl'
          />

          <Stack gap={2}>
            <Heading>How Catalyst Works?</Heading>
            <Text fontSize='2xl' fontWeight='600' color='brand.600'>
              Resume + Portfolio + Catalyst = Jobs Easy Peasy
            </Text>

            <Text fontSize='lg'>
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
            </Text>
          </Stack>
        </Flex>
      </Center>

      <Center mt={24}>
        <Stack gap={2} w='60vw'>
          <Heading textAlign='center'>Proof of Work</Heading>

          <Text fontSize='lg' textAlign='center'>
            Here are some by our top developers.{' '}
            <Link to='/feed'>
              {' '}
              <Text display='inline' fontWeight='600' color='brand.600'>
                Check out everything else
              </Text>
            </Link>
          </Text>

          <Grid
            templateColumns='repeat(3, 1fr)'
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

      <Center mb={100}>
        <Flex transform='auto'>
          <Stack
            transform='auto'
            transformOrigin='bottom'
            translateY='45%'
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
