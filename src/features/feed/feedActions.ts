import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IRejectErrors } from '../../types/auth.type';
import { IFeedRejectErrors, IPost } from '../../types/feed.type';

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

export const likePost = createAsyncThunk<
  IPost,
  { postId: string; userId: string },
  { rejectValue: IFeedRejectErrors }
>('feed/likePost', async (req, { rejectWithValue }) => {
  try {
    const body = JSON.stringify({ userId: req.userId });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await axios.post(
      `${process.env.REACT_APP_POSTS_API_URL}/${req.postId}/like`,
      body,
      config
    );

    return response.data.likedPost as IPost;
  } catch (error) {
    return rejectWithValue({
      errorStatus: error.response.status,
      errorMessage: error.message,
    });
  }
});

export const unlikePost = createAsyncThunk<
  IPost,
  { postId: string; userId: string },
  { rejectValue: IFeedRejectErrors }
>('feed/unlikePost', async (req, { rejectWithValue }) => {
  try {
    const body = JSON.stringify({ userId: req.userId });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await axios.post(
      `${process.env.REACT_APP_POSTS_API_URL}/${req.postId}/unlike`,
      body,
      config
    );

    return response.data.unlikedPost as IPost;
  } catch (error) {
    return rejectWithValue({
      errorStatus: error.response.status,
      errorMessage: error.message,
    });
  }
});

export const commentPost = createAsyncThunk<
  IPost,
  { postId: string; userId: string; commentText: string },
  { rejectValue: IFeedRejectErrors }
>('feed/commentPost', async (req, { rejectWithValue }) => {
  try {
    const body = JSON.stringify({
      userId: req.userId,
      commentText: req.commentText,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await axios.post(
      `${process.env.REACT_APP_POSTS_API_URL}/${req.postId}/comment`,
      body,
      config
    );

    return response.data.commentPost as IPost;
  } catch (error) {
    return rejectWithValue({
      errorStatus: error.response.status,
      errorMessage: error.message,
    });
  }
});
