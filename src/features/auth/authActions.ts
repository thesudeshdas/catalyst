import { createAsyncThunk } from '@reduxjs/toolkit';
import { IRejectErrors, IUser } from '../../types/auth.type';

export const registerUser = createAsyncThunk<
  IUser,
  { name: string; username: string; email: string; password: string },
  { rejectValue: IRejectErrors }
>('auth/registerUser', async (req, { rejectWithValue }) => {
  try {
    console.log('yahan na?', req);

    const response = await fetch(`${process.env.REACT_APP_AUTH_URL}/sign-up`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ ...req }),
    });

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

export const signinWithCredentials = createAsyncThunk<
  IUser,
  { email: string; password: string },
  { rejectValue: IRejectErrors }
>('auth/signinWithCredentials', async (req, { rejectWithValue }) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_AUTH_URL}/sign-in`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ ...req }),
    });

    const data = await response.json();

    if (response.status == 404 || response.status == 401) {
      return rejectWithValue({
        errorStatus: response.status,
        errorMessage: data.message,
      });
    } else if (response.status == 200) {
      return data.signedUser as IUser;
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

export const getUserDetails = createAsyncThunk<
  IUser,
  Partial<{ userId: string; username: string }>,
  { rejectValue: IRejectErrors }
>('auth/getUserDetails', async (req, { rejectWithValue }) => {
  try {
    const data = await fetch(
      `${process.env.REACT_APP_AUTH_URL}/${req.userId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((r) => r.json());

    return data.user as IUser;
  } catch (error) {
    return rejectWithValue({
      errorStatus: error.response.status,
      errorMessage: error.response.message,
    });
  }
});
