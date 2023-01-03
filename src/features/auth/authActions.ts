import { createAsyncThunk } from '@reduxjs/toolkit';
import { IRejectErrors, IUser } from '../../types/auth.type';

export const registerUser = createAsyncThunk<
  IUser,
  { name: string; username: string; email: string; password: string },
  { rejectValue: IRejectErrors }
>('auth/registerUser', async (req, { rejectWithValue }) => {
  try {
    console.log('yahan na?', req);

    const response = await fetch(
      `${process.env.REACT_APP_AUTH_URL}/users/sign-up`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ ...req }),
      }
    );

    const data = await response.json();

    if (response.status == 409 || response.status == 403) {
      return rejectWithValue({
        errorStatus: response.status,
        errorMessage: data.message,
      });
    } else if (response.status == 200) {
      return data.createdUser as IUser;
    } else {
      console.log('unknown error');
      return null;
    }
  } catch (error) {
    return rejectWithValue({
      errorStatus: error.response.status,
      errorMessage: error.response.message,
    });
  }
});
