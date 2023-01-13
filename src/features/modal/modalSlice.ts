import { createSlice } from '@reduxjs/toolkit';
import { IPost } from '../../types/feed.type';

export type ModalState = {
  shown: boolean;
  modalComponent: string | null;
  modalData: { postId: string; post: IPost } | null;
  modalFunction: Function | null;
  loginPrompt: boolean;
};

const initialState: ModalState = {
  shown: false,
  modalComponent: null,
  modalData: null,
  modalFunction: null,
  loginPrompt: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggle: (state, action) => {
      state.shown = !state.shown;
      state.modalComponent = action.payload.modalComponent;
      state.modalData = action.payload.modalData;
      state.modalFunction = action.payload.modalFunction;
    },

    promptLogin: (state) => {
      state.loginPrompt = !state.loginPrompt;
    },
  },
});

export const { toggle, promptLogin } = modalSlice.actions;

export default modalSlice.reducer;
