import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { promptLogin } from '../../features/modal/modalSlice';

export default function ModalLoginPrompt() {
  const dispatch = useAppDispatch();

  const shown = useAppSelector((state) => state.modal.loginPrompt);

  return (
    <>
      <Modal isOpen={shown} onClose={() => dispatch(promptLogin())} isCentered>
        <ModalOverlay />
        <ModalContent w='95%'>
          <ModalCloseButton />

          <ModalBody mt={8} p={10}>
            <Heading size='md' fontWeight='600'>
              Looks like you're not sign in. Sign in now to get full access to
              Catalyst
            </Heading>
          </ModalBody>

          <ModalFooter>
            <Button
              variant='secondary'
              mr={3}
              onClick={() => dispatch(promptLogin())}
            >
              Cancel
            </Button>
            <Link to='/sign-in'>
              <Button variant='primary'>Sign In</Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
