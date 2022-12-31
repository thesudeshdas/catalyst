import * as React from 'react';
import { Box } from '@chakra-ui/react';
import AppNav from '../Navs/AppNav';
import { useAppSelector } from '../../app/hooks';
import ModalContainer from '../Modals/ModalContainer';
import SinglePowst from '../Posts/SinglePowst';
import { Outlet } from 'react-router-dom';
// import CommentPanel from '../Chats/CommentPanel';

export default function Layout({
  // children,
  comment,
}: {
  // children: any;
  comment?: boolean;
}) {
  const showModal = useAppSelector((state) => state.modal.shown);
  const modalComponent = useAppSelector((state) => state.modal.modalComponent);
  const modalData = useAppSelector((state) => state.modal.modalData);
  const modalFunction = useAppSelector((state) => state.modal.modalFunction);

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
