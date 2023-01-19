import { AspectRatio, Box, Flex, Image, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { IPostPic } from '../../types/feed.type';

export default function CarouselImage({ images }: { images: IPostPic[] }) {
  const [curImg, setCurImg] = useState<{
    src: string;
    alt: string;
    _id?: string;
  }>(images[0]);

  return (
    <Stack gap={4}>
      <AspectRatio w='100%' ratio={16 / 9}>
        <Image
          src={curImg.src}
          alt={curImg.alt}
          objectFit='cover'
          borderRadius='2xl'
        />
      </AspectRatio>

      {images.length > 1 && (
        <Flex gap={4}>
          {images.map((image) => (
            <AspectRatio
              key={image._id}
              w='15rem'
              ratio={16 / 9}
              onClick={() => setCurImg(image)}
              cursor='pointer'
              position='relative'
              border={
                curImg.src === image.src
                  ? { base: '2px solid', md: '4px solid' }
                  : ''
              }
              borderColor={{ base: 'brand.600', md: 'brand.600' }}
              overflow='hidden'
              borderRadius={{ base: 'xl', lg: '2xl' }}
            >
              <Image src={image.src} alt={image.alt} objectFit='cover' />
            </AspectRatio>
          ))}
        </Flex>
      )}
    </Stack>
  );
}
