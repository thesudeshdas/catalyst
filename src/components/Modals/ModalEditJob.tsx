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

export default function ModalEditJob() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const [title, setTitle] = useState<string>(
    user?.title || "What's your job title?"
  );
  const [company, setCompany] = useState<string>(
    user?.company || 'Where do you work?'
  );

  const handleSubmit = async () => {
    const data = await dispatch(
      updateUserDetails({ userId: user._id, toUpdate: { title, company } })
    );
    setTitle(data.payload.title);
    setCompany(data.payload.company);
    onClose();
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex gap={4} alignItems='center'>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <InputGroup>
            <InputRightElement pointerEvents='none' children={<EditIcon />} />
            <Input
              variant='flushed'
              isReadOnly
              placeholder={title}
              onClick={onOpen}
            />
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Company</FormLabel>

          <InputGroup>
            <InputRightElement pointerEvents='none' children={<EditIcon />} />
            <Input
              variant='flushed'
              isReadOnly
              placeholder={company}
              onClick={onOpen}
            />
          </InputGroup>
        </FormControl>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit your work details</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Center>
              <Stack w='40rem' gap={4}>
                <FormControl>
                  <FormLabel>Job Title</FormLabel>
                  <InputGroup>
                    <InputRightElement
                      pointerEvents='none'
                      children={<EditIcon />}
                    />
                    <Input
                      variant='flushed'
                      placeholder={user?.title || "What's your job title? 👷"}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <FormLabel>Company</FormLabel>
                  <InputGroup>
                    <InputRightElement
                      pointerEvents='none'
                      children={<EditIcon />}
                    />
                    <Input
                      variant='flushed'
                      placeholder={user?.company || 'Where do you work? 🏢'}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>
              </Stack>
            </Center>
          </ModalBody>
          <ModalFooter>
            <Button variant='secondary' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button variant='primary' onClick={handleSubmit}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
