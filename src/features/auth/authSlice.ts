import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '../../types/auth.type';
import {
  followUser,
  getUserDetails,
  registerUser,
  signinWithCredentials,
  unfollowUser,
  updateUserDetails,
} from './authActions';

let localStatus, localUser, localToken;

localStatus = JSON.parse(localStorage?.getItem('localStatus')) || false;
localUser = JSON.parse(localStorage?.getItem('localUser')) || {};
localToken = JSON.parse(localStorage?.getItem('accTkn')) || null;

const initialState: IAuthState = {
  loading: false,
  signInStatus: localStatus?.signInStatus,
  errors: {
    email: '',
    password: '',
    username: '',
  },
  user: localUser,
  accessToken: localToken,
};

export const authSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    logoutPressed: (state, action) => {
      state.signInStatus = false;
      state.user = null;
      state.accessToken = null;
    },
  },
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
      state.user = payload.user;
      state.accessToken = payload.accessToken;
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
      state.loading = false;

      // set only the authenticated user details to RTK
      if (payload._id === state.user._id) {
        state.user = payload;
      }
    });

    builder.addCase(getUserDetails.rejected, (state) => {
      state.loading = false;
    });

    // update user details reducers
    builder.addCase(updateUserDetails.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(updateUserDetails.fulfilled, (state, { payload }) => {
      state.loading = false;

      // set only the authenticated user details to RTK
      if (payload._id === state.user._id) {
        state.user = payload;
      }
    });

    builder.addCase(updateUserDetails.rejected, (state) => {
      state.loading = false;
    });

    // follow user
    builder.addCase(followUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(followUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user.following = payload.following;
    });

    builder.addCase(followUser.rejected, (state, { payload }) => {
      state.loading = false;
    });

    // unfollow user
    builder.addCase(unfollowUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(unfollowUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user.following = payload.following;
    });

    builder.addCase(unfollowUser.rejected, (state, { payload }) => {
      state.loading = false;
    });
  },
});

export const { logoutPressed } = authSlice.actions;

export default authSlice.reducer;
