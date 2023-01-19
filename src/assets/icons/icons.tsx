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
    <Icon viewBox='0 0 24 24' {...props}>
      <path
        fill='currentColor'
        d='m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z'
      />
    </Icon>
  </Center>
);

export const UnlikeIcon = (props) => (
  <Center>
    <Icon viewBox='0 0 24 24' {...props}>
      <path
        fill='currentColor'
        d='m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z'
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
    <Icon viewBox='0 0 24 24' {...props}>
      <path
        fill='currentColor'
        d='M17 3H7a2 2 0 0 0-2 2v16l7-3l7 3V5a2 2 0 0 0-2-2Z'
      />
    </Icon>
  </Center>
);

export const UnsaveIcon = (props) => (
  <Center>
    <Icon viewBox='0 0 24 24' {...props}>
      <path
        fill='currentColor'
        d='m17 18l-5-2.18L7 18V5h10m0-2H7a2 2 0 0 0-2 2v16l7-3l7 3V5a2 2 0 0 0-2-2Z'
      />
    </Icon>
  </Center>
);
