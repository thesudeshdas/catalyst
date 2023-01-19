import { AspectRatio, Image } from '@chakra-ui/react';

export default function ProfilePicture({
  src = '/images/blank_profile.png',
  alt = 'user',
  size = '4rem',
}: {
  src: string;
  alt: string;
  size?: string;
}) {
  return (
    <AspectRatio
      w={{ base: `calc(${size} / 2)`, md: size }}
      h={{ base: `calc(${size} / 2)`, md: size }}
      ratio={1 / 1}
    >
      <Image src={src} alt={alt} objectFit='cover' borderRadius='full' />
    </AspectRatio>
  );
}
