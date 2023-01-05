import { EditIcon } from '@chakra-ui/icons';
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
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
  Tag,
  TagCloseButton,
  TagLabel,
  useDisclosure,
} from '@chakra-ui/react';

import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateUserDetails } from '../../features/auth/authActions';

import ProfileTagPill from '../Pills/ProfileTagPill';

export default function ModalEditTags() {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.user?._id);
  const userTags = useAppSelector((state) => state.auth.user?.tags);

  const [value, setValue] = useState<string>('');
  const [tags, setTags] = useState<string[]>(userTags || []);

  const handleAddTag = (tag) =>
    setTags((prevArr) => (prevArr ? [...prevArr, tag] : [tag]));

  const handleRemoveTag = (tag) => {
    setTags((prevArr) => prevArr.filter((item) => item != tag));
  };

  const handleInputChange = (e) => setValue(e.target.value);

  const handleSubmit = async () => {
    const data = await dispatch(
      updateUserDetails({ userId, toUpdate: { tags } })
    );

    setTags(data.payload.tags);
    onClose();
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <FormControl>
        <FormLabel>Tags</FormLabel>
        <InputGroup>
          <InputRightElement pointerEvents='none' children={<EditIcon />} />

          {tags.length > 0 ? (
            <>
              <Flex gap={4}>
                {tags.map((tag) => (
                  <ProfileTagPill tag={tag} />
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
                userTags?.length > 0 ? 'Edit your tags' : 'Add your tags'
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
          <ModalHeader>Edit your tags</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Center>
              <Stack w='40rem' gap={4}>
                <HStack gap={4} wrap='wrap'>
                  {tags &&
                    tags.map((tag) => (
                      <Tag
                        borderRadius='lg'
                        size='lg'
                        variant='solid'
                        colorScheme='green'
                      >
                        <TagLabel w='fit-content'>{tag}</TagLabel>
                        <TagCloseButton onClick={() => handleRemoveTag(tag)} />
                      </Tag>
                    ))}
                </HStack>

                <InputGroup minW='5rem' maxW='15rem'>
                  <Input
                    value={value}
                    onChange={handleInputChange}
                    variant='flushed'
                    placeholder='Add a tag'
                  />
                  <InputRightElement>
                    <Button
                      size='sm'
                      w='8rem'
                      onClick={() => handleAddTag(value)}
                    >
                      Add
                    </Button>
                  </InputRightElement>
                </InputGroup>
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
