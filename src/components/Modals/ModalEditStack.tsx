import { EditIcon } from '@chakra-ui/icons';
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateUserDetails } from '../../features/auth/authActions';

import { IStack } from '../../types/auth.type';
import ProfileTagPill from '../Pills/ProfileTagPill';
import SearchStack from '../Search/SearchStack';

export default function ModalEditStack() {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.user?._id);
  const userStack = useAppSelector((state) => state.auth.user?.stack);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [stack, setStack] = useState<IStack[]>(userStack || []);

  const handleSubmit = async () => {
    const data = await dispatch(
      updateUserDetails({ userId, toUpdate: { stack } })
    );

    setStack(data.payload.stack);
    onClose();
  };

  return (
    <>
      <FormControl>
        <FormLabel>Tech Stack</FormLabel>

        <InputGroup>
          <InputRightElement pointerEvents='none' children={<EditIcon />} />

          {stack.length > 0 ? (
            <>
              <Flex wrap='wrap' gap={4}>
                {stack.map((tag) => (
                  <ProfileTagPill key={tag.value} tag={tag.label} />
                ))}
              </Flex>

              <Input
                height='100%'
                width='100%'
                position='absolute'
                top='0'
                left='0'
                opacity='0'
                isReadOnly
                onClick={onOpen}
              />
            </>
          ) : (
            <Input
              variant='flushed'
              placeholder={
                userStack?.length > 0
                  ? 'Edit your tech stack'
                  : 'Add your tech stack'
              }
              isReadOnly
              onClick={onOpen}
            />
          )}
        </InputGroup>
      </FormControl>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit your tech stack</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Center>
              <Stack w='40rem' gap={4}>
                <SearchStack tags={stack} setTags={setStack} />
              </Stack>
            </Center>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme='blue'
              variant='outline'
              fontWeight='500'
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button colorScheme='blue' fontWeight='500' onClick={handleSubmit}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
