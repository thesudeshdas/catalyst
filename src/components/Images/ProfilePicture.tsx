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
  console.log({ src });

  return (
    <AspectRatio w={size} ratio={1 / 1}>
      <Image
        src={src}
        alt={alt}
        objectFit='cover'
        w='8rem'
        h='8rem'
        borderRadius='full'
      />
    </AspectRatio>
  );
}
