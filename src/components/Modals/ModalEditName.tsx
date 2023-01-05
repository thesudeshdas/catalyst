import { EditIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
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
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateUserDetails } from '../../features/auth/authActions';

export default function ModalEditName() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const [name, setName] = useState<string>(user.name);

  const handleSubmit = async () => {
    const data = await dispatch(
      updateUserDetails({ userId: user._id, toUpdate: { name } })
    );

    setName(data.payload.name);
    onClose();
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <InputGroup>
          <InputRightElement pointerEvents='none' children={<EditIcon />} />
          <Input
            placeholder={name}
            readOnly
            variant='flushed'
            onClick={onOpen}
          />
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel>Email address</FormLabel>
        <InputGroup>
          <InputRightElement
            children={
              <Tooltip
                label='Email can not be changed. Contact the developer'
                fontSize='md'
              >
                <InfoOutlineIcon />
              </Tooltip>
            }
          />
          <Input
            placeholder={user?.email || 'loading'}
            readOnly
            variant='flushed'
            onClick={onOpen}
          />
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel>Username</FormLabel>
        <InputGroup>
          <InputRightElement
            children={
              <Tooltip
                label='Username can not be changed. Contact the developer'
                fontSize='md'
              >
                <InfoOutlineIcon />
              </Tooltip>
            }
          />
          <Input
            placeholder={user?.username || 'loading'}
            readOnly
            variant='flushed'
            onClick={onOpen}
          />
        </InputGroup>
      </FormControl>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit your personal details</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Center>
              <Stack w='40rem' gap={4}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <InputGroup>
                    <InputRightElement
                      pointerEvents='none'
                      children={<EditIcon />}
                    />
                    <Input
                      variant='flushed'
                      placeholder={user?.name || 'loading'}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <InputGroup>
                    <InputRightElement
                      children={
                        <Tooltip
                          label='Email can not be changed. Contact the developer'
                          fontSize='md'
                        >
                          <InfoOutlineIcon />
                        </Tooltip>
                      }
                    />
                    <Input
                      readOnly
                      variant='flushed'
                      placeholder={user?.email || 'loading'}
                    />
                  </InputGroup>
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                </FormControl>

                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <InputGroup>
                    <InputRightElement
                      children={
                        <Tooltip
                          label='Username can not be changed. Contact the developer'
                          fontSize='md'
                        >
                          <InfoOutlineIcon />
                        </Tooltip>
                      }
                    />
                    <Input
                      readOnly
                      variant='flushed'
                      placeholder={user?.username || 'loading'}
                    />
                  </InputGroup>
                  <FormErrorMessage>Email is required.</FormErrorMessage>
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
