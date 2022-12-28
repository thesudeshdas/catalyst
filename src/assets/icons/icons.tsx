import * as React from 'react';
import { Center, Icon } from '@chakra-ui/react';

export const FilterIcon = (props) => (
  <Icon viewBox='0 0 50 50' {...props}>
    <path
      fill='currentColor'
      d='M21.5 36q-.65 0-1.075-.425Q20 35.15 20 34.5q0-.65.425-1.075Q20.85 33 21.5 33h5q.65 0 1.075.425Q28 33.85 28 34.5q0 .65-.425 1.075Q27.15 36 26.5 36Zm-14-21q-.65 0-1.075-.425Q6 14.15 6 13.5q0-.65.425-1.075Q6.85 12 7.5 12h33q.65 0 1.075.425Q42 12.85 42 13.5q0 .65-.425 1.075Q41.15 15 40.5 15Zm6 10.5q-.65 0-1.075-.425Q12 24.65 12 24q0-.65.425-1.075.425-.425 1.075-.425h21q.65 0 1.075.425Q36 23.35 36 24q0 .65-.425 1.075-.425.425-1.075.425Z'
    />
  </Icon>
);

export const CommentIcon = (props) => (
  <Center>
    <Icon viewBox='0 0 256 256' {...props}>
      <path
        fill='currentColor'
        d='M232 124a100.2 100.2 0 0 1-100 100H47.7A15.7 15.7 0 0 1 32 208.3V124a100 100 0 0 1 200 0Z'
      />
    </Icon>
  </Center>
);

export const LikeIcon = (props) => (
  <Center>
    <Icon viewBox='0 0 256 256' {...props}>
      <path
        fill='currentColor'
        d='M236 92c0 30.6-17.7 62-52.6 93.4a314.3 314.3 0 0 1-51.5 37.6a8.1 8.1 0 0 1-7.8 0C119.8 220.6 20 163.9 20 92a60 60 0 0 1 108-36a60 60 0 0 1 108 36Z'
      />
    </Icon>
  </Center>
);

export const ShareIcon = (props) => (
  <Center>
    <Icon viewBox='0 0 256 256' {...props}>
      <path
        fill='currentColor'
        d='M216 200a40 40 0 0 1-80 0a41 41 0 0 1 2.7-14.5l-46.1-29.6a40 40 0 1 1 0-55.8l46.1-29.6A41 41 0 0 1 136 56a40.1 40.1 0 1 1 11.4 27.9l-46.1 29.6a40.3 40.3 0 0 1 0 29l46.1 29.6A40 40 0 0 1 216 200Z'
      />
    </Icon>
  </Center>
);

export const InfoIcon = (props) => (
  <Center>
    <Icon viewBox='0 0 256 256' {...props}>
      <path
        fill='currentColor'
        d='M128 24a104 104 0 1 0 104 104A104.1 104.1 0 0 0 128 24Zm-2 48a12 12 0 1 1-12 12a12 12 0 0 1 12-12Zm10 112h-8a8 8 0 0 1-8-8v-48a8 8 0 0 1 0-16h8a8 8 0 0 1 8 8v48a8 8 0 0 1 0 16Z'
      />
    </Icon>
  </Center>
);

export const SaveIcon = (props) => (
  <Center>
    <Icon viewBox='0 0 256 256' {...props}>
      <path
        fill='currentColor'
        d='M200 48v176a8 8 0 0 1-12.2 6.8L128 193.4l-59.8 37.4A7.6 7.6 0 0 1 64 232a7.8 7.8 0 0 1-3.9-1a8.1 8.1 0 0 1-4.1-7V48a16 16 0 0 1 16-16h112a16 16 0 0 1 16 16Z'
      />
    </Icon>
  </Center>
);
