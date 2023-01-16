import { Flex, Image, Link, Stack, Text } from '@chakra-ui/react';

export default function AppFooter() {
  return (
    <Stack alignItems='center' pb={2}>
      <Flex alignItems='center' gap={2}>
        <Text fontSize='lg' fontWeight='500'>
          Built in
        </Text>
        <Image src='/icons/tech-stack/LogosReact.svg' />

        <Text fontSize='lg' fontWeight='500'>
          by{' '}
          <Link href='https://github.com/thesudeshdas' target='blank'>
            Sudesh Das
          </Link>
        </Text>
      </Flex>

      <Flex alignItems='center' gap={2}>
        <Text fontSize='lg' fontWeight='500'>
          Source Code
        </Text>

        <Link href='https://github.com/thesudeshdas/catalyst' target='blank'>
          <Image src='/icons/tech-stack/LogosGithubIcon.svg' />
        </Link>
      </Flex>
    </Stack>
  );
}
