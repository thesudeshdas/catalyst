import { CloseIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';
import { useAppDispatch } from '../../app/hooks';
import { toggle } from '../../features/modal/modalSlice';

export default function BackdropSinglePost() {
  const dispatch = useAppDispatch();

  return (
    <Flex
      alignItems='center'
      direction='row-reverse'
      onClick={() => dispatch(toggle(''))}
      cursor='pointer'
      h='3rem'
      p={2}
    >
      <IconButton
        aria-label='Close Single Powst'
        icon={<CloseIcon color='white' />}
        variant='ghost'
        colorScheme='whiteAlpha'
      />
    </Flex>
  );
}
