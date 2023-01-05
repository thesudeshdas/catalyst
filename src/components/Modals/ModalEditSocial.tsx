import {
  CloseIcon,
  EditIcon,
  InfoIcon,
  InfoOutlineIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Image,
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
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { socialIcons } from '../../data/portfolio/portfolio.data';

export default function ModalEditSocial() {
  const userSocial = useAppSelector((state) => state.auth.user?.social);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [socials, setSocials] = useState(
    userSocial || [
      {
        link: '',
        platform: 'Behance',
      },
      {
        link: '',
        platform: 'DevTo',
      },
      {
        link: '',
        platform: 'Dribbble',
      },
      {
        link: '',
        platform: 'FacebookBox',
      },
      {
        link: '',
        platform: 'Github',
      },
      {
        link: '',
        platform: 'Instagram',
      },
      {
        link: '',
        platform: 'Linkedin',
      },
      {
        link: '',
        platform: 'Medium',
      },
      {
        link: '',
        platform: 'Twitter',
      },
    ]
  );

  const handleSubmit = async () => {
    // const data = await updateUser(user._id, { social: socials });
    // setSocials(data.social);
    // onClose();
  };

  const handleSocialChange = (e) => {
    setSocials((prev) =>
      [...prev].map((item) => {
        if (item.platform == e.target.name) {
          return { ...item, link: e.target.value };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <>
      <FormControl>
        <FormLabel>Your Socials</FormLabel>

        <Flex w='60em' wrap='wrap' justifyContent='space-between'>
          {socialIcons.map((icon) => {
            return (
              <Flex w='48%' gap={4} mb={4} alignItems='center' key={icon.alt}>
                <Image
                  key={icon.src}
                  src={icon.src}
                  alt={icon.alt}
                  width={8}
                  height={8}
                />

                <InputGroup>
                  <InputRightElement
                    pointerEvents='none'
                    children={<EditIcon />}
                  />
                  <Input
                    variant='flushed'
                    placeholder={
                      socials.find((item) => item.platform == icon.alt)?.link ||
                      'add this social'
                    }
                    onClick={onOpen}
                    readOnly
                  />
                </InputGroup>
              </Flex>
            );
          })}
        </Flex>
      </FormControl>

      <Modal isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit your socials</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Flex wrap='wrap' justifyContent='space-between'>
              {socialIcons.map((icon) => {
                return (
                  <Flex
                    w='48%'
                    gap={4}
                    mb={4}
                    alignItems='center'
                    key={icon.alt}
                  >
                    <Image
                      key={icon.src}
                      src={icon.src}
                      alt={icon.alt}
                      width={8}
                      height={8}
                    />

                    <Input
                      name={icon.alt}
                      variant='flushed'
                      placeholder={
                        socials.find((item) => item.platform == icon.alt)
                          ?.link || 'add this social'
                      }
                      onChange={(e) => handleSocialChange(e)}
                    />
                  </Flex>
                );
              })}
            </Flex>
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
