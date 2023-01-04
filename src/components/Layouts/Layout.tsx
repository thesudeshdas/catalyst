import * as React from 'react';
import { Box } from '@chakra-ui/react';
import AppNav from '../Navs/AppNav';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import ModalContainer from '../Modals/ModalContainer';
import SinglePowst from '../Posts/SinglePowst';
import { Outlet } from 'react-router-dom';
import { getUserDetails } from '../../features/auth/authActions';
// import CommentPanel from '../Chats/CommentPanel';

export default function Layout({
  // children,
  comment,
}: {
  // children: any;
  comment?: boolean;
}) {
  const dispatch = useAppDispatch();

  const showModal = useAppSelector((state) => state.modal.shown);
  const modalComponent = useAppSelector((state) => state.modal.modalComponent);
  const modalData = useAppSelector((state) => state.modal.modalData);
  const modalFunction = useAppSelector((state) => state.modal.modalFunction);

  const user = useAppSelector((state) => state.auth.user);

  React.useEffect(() => {
    if (user?._id) {
      (async () => {
        await dispatch(getUserDetails({ userId: user._id }));
      })();
    }
  }, [user._id, dispatch]);

  return (
    <>
      <AppNav />
      <Box maxW={comment ? '90vw' : '70vw'} m='2rem auto'>
        <Outlet />
      </Box>

      {showModal && modalComponent == 'SinglePowst' && (
        <ModalContainer>
          <SinglePowst postId={modalData?.postId} />
        </ModalContainer>
      )}
    </>
  );
}
