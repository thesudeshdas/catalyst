import { EditIcon } from '@chakra-ui/icons';
import {
  Button,
  Center,
  FormControl,
  FormLabel,
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
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';

import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateUserDetails } from '../../features/auth/authActions';

export default function ModalEditBio() {
  const dipatch = useAppDispatch();

  const userBio = useAppSelector((state) => state.auth.user?.bio);
  const userId = useAppSelector((state) => state.auth.user?._id);

  const [bio, setBio] = useState<string>(userBio || 'Add your bio');

  const handleSubmit = async () => {
    await dipatch(updateUserDetails({ userId, toUpdate: { bio } }));
    onClose();
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <FormControl>
        <FormLabel>Bio</FormLabel>
        <InputGroup>
          <Textarea
            variant='flushed'
            placeholder={userBio || 'loading'}
            onClick={onOpen}
          />
        </InputGroup>
      </FormControl>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w='95%'>
          <ModalHeader>Edit your bio</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Center>
              <Stack w='40rem' gap={4}>
                <FormControl>
                  <FormLabel>Bio</FormLabel>
                  <InputGroup>
                    <InputRightElement
                      pointerEvents='none'
                      children={<EditIcon />}
                    />
                    <Textarea
                      variant='flushed'
                      placeholder={
                        userBio || 'Tell us something about yourself'
                      }
                      onChange={(e) => setBio(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>
              </Stack>
            </Center>
          </ModalBody>
          <ModalFooter>
            <Button
              variant='secondary'
              mr={3}
              onClick={onClose}
              size={{ base: 'sm', lg: 'md' }}
            >
              Cancel
            </Button>
            <Button
              variant='primary'
              onClick={handleSubmit}
              size={{ base: 'sm', lg: 'md' }}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
