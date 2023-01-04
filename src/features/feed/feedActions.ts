import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IRejectErrors } from '../../types/auth.type';
import { IPost } from '../../types/feed.type';

export const getAllPosts = createAsyncThunk<
  IPost[],
  {},
  { rejectValue: IRejectErrors }
>('feed/getAllPosts', async (_, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await axios.get(
      `${process.env.REACT_APP_POSTS_API_URL}`,
      config
    );

    return response.data.posts as IPost[];
  } catch (error) {
    return rejectWithValue({
      errorStatus: error.response.status,
      errorMessage: error.message,
    });
  }
});
