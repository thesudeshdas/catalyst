import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '../../types/auth.type';
import {
  getUserDetails,
  registerUser,
  signinWithCredentials,
} from './authActions';

let localStatus, localUser;

localStatus = JSON.parse(localStorage?.getItem('localStatus')) || false;
localUser = JSON.parse(localStorage?.getItem('localUser')) || null;

const initialState: IAuthState = {
  loading: false,
  signInStatus: localStatus?.signInStatus,
  errors: {
    email: '',
    password: '',
    username: '',
  },
  user: localUser,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // register user reducers
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.loading = true;
      state.user = payload;
    });

    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.loading = true;
      switch (payload.errorStatus) {
        case 409:
          state.errors.email = payload.errorMessage;
          break;

        case 403:
          state.errors.username = payload.errorMessage;
      }
    });

    // sign in reducers
    builder.addCase(signinWithCredentials.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(signinWithCredentials.fulfilled, (state, { payload }) => {
      console.log({ payload });

      state.loading = true;
      state.signInStatus = true;
      state.user = payload;
    });

    builder.addCase(signinWithCredentials.rejected, (state, { payload }) => {
      state.loading = true;
      switch (payload.errorStatus) {
        case 404:
          state.errors.email = payload.errorMessage;
          break;

        case 401:
          state.errors.password = payload.errorMessage;
          break;
      }
    });

    // get user details reducers
    builder.addCase(getUserDetails.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getUserDetails.fulfilled, (state, { payload }) => {
      state.loading = true;
      state.user = payload;
    });

    builder.addCase(getUserDetails.rejected, (state) => {
      state.loading = true;
      console.log('ab kya karein ji?');
    });
  },
});

export default modalSlice.reducer;
