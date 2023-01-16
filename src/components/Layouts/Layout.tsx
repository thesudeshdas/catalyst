import { Box } from '@chakra-ui/react';
import AppNav from '../Navs/AppNav';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import ModalContainer from '../Modals/ModalContainer';
import SinglePowst from '../Posts/SinglePowst';
import { Outlet } from 'react-router-dom';
import { getUserDetails } from '../../features/auth/authActions';
import { useEffect } from 'react';
import { getAllPosts } from '../../features/feed/feedActions';
import CreateSinglePowst from '../Posts/CreateSinglePowst';
import EditPowst from '../Posts/EditPowst';
import ModalLoginPrompt from '../Modals/ModalLoginPrompt';
import AppFooter from '../Footers/AppFooter';

export default function Layout({ comment }: { comment?: boolean }) {
  const dispatch = useAppDispatch();

  const showModal = useAppSelector((state) => state.modal.shown);
  const modalComponent = useAppSelector((state) => state.modal.modalComponent);
  const modalData = useAppSelector((state) => state.modal.modalData);
  const loginPrompt = useAppSelector((state) => state.modal.loginPrompt);
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    if (user?._id) {
      (async () => {
        await dispatch(getUserDetails({ userId: user?._id }));
      })();
    }
  }, [user?._id, dispatch]);

  useEffect(() => {
    (async () => {
      await dispatch(getAllPosts({}));
    })();
  }, [dispatch]);

  return (
    <>
      <AppNav />
      <Box maxW={comment ? '90vw' : '70vw'} m='2rem auto' minH='78vh'>
        <Outlet />
      </Box>

      <AppFooter />

      {showModal && modalComponent === 'SinglePowst' && (
        <ModalContainer>
          <SinglePowst postId={modalData?.postId} />
        </ModalContainer>
      )}

      {showModal && modalComponent === 'CreateSinglePowst' && (
        <ModalContainer>
          <CreateSinglePowst />
        </ModalContainer>
      )}

      {showModal && modalComponent === 'EditPowst' && (
        <ModalContainer>
          <EditPowst post={modalData?.post} />
        </ModalContainer>
      )}

      {loginPrompt && <ModalLoginPrompt />}
    </>
  );
}
