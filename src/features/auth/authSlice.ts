import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../types/auth.type';

export type AuthState = {
  status: boolean;
  user: IUser;
};

const initialState: AuthState = {
  status: false,
  user: null,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    logInReducer: (state, { payload }) => {
      state.status = true;
      state.user = payload.user;
    },

    logOutReducer: (state, action) => {
      state.status = false;
    },
  },
});

export const { logInReducer } = modalSlice.actions;

export default modalSlice.reducer;
