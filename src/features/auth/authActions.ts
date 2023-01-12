import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IAuthState, IRejectErrors, IUser } from '../../types/auth.type';

export const registerUser = createAsyncThunk<
  IUser,
  { name: string; username: string; email: string; password: string },
  { rejectValue: IRejectErrors }
>('auth/registerUser', async (req, { rejectWithValue }) => {
  try {
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
    const body = JSON.stringify(req);

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const response = await axios.post(
      `${process.env.REACT_APP_AUTH_URL}/sign-in`,
      body,
      config
    );

    if (response.status == 404 || response.status == 401) {
      return rejectWithValue({
        errorStatus: response.status,
        errorMessage: response.data.message,
      });
    } else if (response.status == 200) {
      return response.data.signedUser as IUser;
    } else {
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
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const response = await axios.get(
      `${process.env.REACT_APP_AUTH_URL}/${req.userId}`,
      config
    );

    return response.data.user as IUser;
  } catch (error) {
    return rejectWithValue({
      errorStatus: error.response.status,
      errorMessage: error.message,
    });
  }
});

export const updateUserDetails = createAsyncThunk<
  IUser,
  { userId: string; toUpdate: Partial<IUser> },
  { rejectValue: IRejectErrors }
>('auth/updateUserDetails', async (req, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify(req.toUpdate);

    const response = await axios.post(
      `${process.env.REACT_APP_AUTH_URL}/${req.userId}`,
      body,
      config
    );

    return response.data.updatedUser as IUser;
  } catch (error) {
    return rejectWithValue({
      errorStatus: error.response.status,
      errorMessage: error.message,
    });
  }
});

export const followUser = createAsyncThunk<
  IUser,
  { followerUserId: string; followingUserId: string },
  { rejectValue: IRejectErrors }
>('auth/followUser', async (req, { rejectWithValue }) => {
  try {
    const body = JSON.stringify({ followerUserId: req.followerUserId });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await axios.post(
      `${process.env.REACT_APP_AUTH_URL}/${req.followingUserId}/follow`,
      body,
      config
    );

    return response.data.updatedFollower as IUser;
  } catch (error) {
    return rejectWithValue({
      errorStatus: error.response.status,
      errorMessage: error.message,
    });
  }
});

export const unfollowUser = createAsyncThunk<
  IUser,
  { unfollowerUserId: string; unfollowingUserId: string },
  { rejectValue: IRejectErrors }
>('auth/unfollowUser', async (req, { rejectWithValue }) => {
  try {
    const body = JSON.stringify({ unfollowerUserId: req.unfollowerUserId });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await axios.post(
      `${process.env.REACT_APP_AUTH_URL}/${req.unfollowingUserId}/unfollow`,
      body,
      config
    );

    return response.data.updatedUnfollower as IUser;
  } catch (error) {
    return rejectWithValue({
      errorStatus: error.response.status,
      errorMessage: error.message,
    });
  }
});
