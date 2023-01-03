import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '../../types/auth.type';
import { registerUser } from './authActions';

let localStatus, localUser;

if (typeof window !== 'undefined') {
  localStatus = JSON.parse(localStorage?.getItem('localStatus')) || false;
  localUser = JSON.parse(localStorage?.getItem('localUser')) || null;
}

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
  },
});

// export const { logInReducer } = modalSlice.actions;

export default modalSlice.reducer;
