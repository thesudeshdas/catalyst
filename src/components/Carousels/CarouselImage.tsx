import * as React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { IPostPic } from '../../types/feed.type';

export default function CarouselImage({ images }: { images: IPostPic[] }) {
  const [curImg, setCurImg] = useState<{
    src: string;
    alt: string;
    _id?: string;
  }>(images[0]);

  return (
    <>
      <Image
        src={curImg.src}
        alt={curImg.alt}
        width={1500}
        height={750}
        objectFit='cover'
        borderRadius='2xl'
      />

      {images.length > 1 && (
        <Flex gap={4}>
          {images.map((image) => (
            <Box
              key={image._id}
              w='15rem'
              h='10rem'
              onClick={() => setCurImg(image)}
              cursor='pointer'
              position='relative'
              borderRadius='2xl'
              overflow='hidden'
              border={curImg.src == image.src ? '4px solid' : ''}
              borderColor='brand.600'
            >
              <Image
                src={image.src}
                alt={image.alt}
                objectFit='cover'
                width='100%'
                height='100%'
              />
            </Box>
          ))}
        </Flex>
      )}
    </>
  );
}
