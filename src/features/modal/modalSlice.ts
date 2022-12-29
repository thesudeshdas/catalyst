import { createSlice } from '@reduxjs/toolkit';

export type ModalState = {
  shown: boolean;
  modalComponent: string | null;
  modalData: { postId: string } | null;
  modalFunction: Function | null;
};

const initialState: ModalState = {
  shown: false,
  modalComponent: null,
  modalData: null,
  modalFunction: null,
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
  },
});

export const { toggle } = modalSlice.actions;

export default modalSlice.reducer;
