import { Box, Flex, Image, Input, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import ModalEditName from '../Modals/ModalEditName';
import ModalEditBio from '../Modals/ModalEditBio';
import ModalEditJob from '../Modals/ModalEditJob';
import ModalEditSocial from '../Modals/ModalEditSocial';
import ModalEditStack from '../Modals/ModalEditStack';
import ModalEditTags from '../Modals/ModalEditTags';
import { updateUserDetails } from '../../features/auth/authActions';

export default function FormEditProfile() {
  const dispatch = useAppDispatch();

  const authUser = useAppSelector((state) => state.auth.user);

  const userProfilePic = useAppSelector(
    (state) => state.auth.user.profilePic?.src
  );

  const [imgSrc, setImgSrc] = useState<string>(
    userProfilePic || '/images/blank_profile.png'
  );

  const handleImgUpload = async (event) => {
    const file = event.target.files[0];
    const dataForm = new FormData();

    dataForm.append('file', file);
    dataForm.append('upload_preset', 'catalyst_preset');

    const data = await fetch(process.env.REACT_APP_CLOUDINARY_URL, {
      method: 'POST',
      body: dataForm,
    }).then((r) => r.json());

    if (data.secure_url) {
      await dispatch(
        updateUserDetails({
          userId: authUser._id,
          toUpdate: {
            profilePic: { src: data.secure_url, alt: authUser.name },
          },
        })
      );
    }

    setImgSrc(data.secure_url);
  };

  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      p={2}
      alignItems={{ base: 'center', lg: 'flex-start' }}
      mb={12}
    >
      <Box
        width={250}
        height={250}
        position='relative'
        mr={{ base: 0, lg: 12 }}
      >
        <Image
          alt='blank profile'
          src={imgSrc}
          width={250}
          height={250}
          objectFit='cover'
          borderRadius='50%'
        />
        <Input
          type='file'
          height='100%'
          width='100%'
          position='absolute'
          top='0'
          left='0'
          opacity='0'
          aria-hidden='true'
          accept='image/*'
          onChange={handleImgUpload}
        />
      </Box>

      <Stack gap={4} w={{ base: '100%', md: '60%', lg: '75%' }}>
        <ModalEditName />

        <ModalEditBio />

        <ModalEditJob />

        <ModalEditTags />

        <ModalEditStack />

        <ModalEditSocial />
      </Stack>
    </Flex>
  );
}
