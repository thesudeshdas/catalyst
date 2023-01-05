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
import { useAppSelector } from '../../app/hooks';

export default function ModalEditBio() {
  const userBio = useAppSelector((state) => state.auth.user?.bio);

  const [bio, setBio] = useState<string>(userBio || 'Add your bio');

  const handleSubmit = async () => {
    // const data = await updateUser(user._id, { bio: bio });
    // setBio(data.bio);
    // onClose();
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <FormControl>
        <FormLabel>Bio</FormLabel>
        <InputGroup>
          <Textarea variant='flushed' placeholder={bio} onClick={onOpen} />
        </InputGroup>
      </FormControl>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
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
