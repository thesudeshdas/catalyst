import { createSlice } from '@reduxjs/toolkit';

export type AuthState = {
  status: boolean;
};

const initialState: AuthState = {
  status: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    logInReducer: (state, action) => {
      state.status = true;
    },

    logOutReducer: (state, action) => {
      state.status = false;
    },
  },
});

export const { logInReducer } = modalSlice.actions;

export default modalSlice.reducer;
