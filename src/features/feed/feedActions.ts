import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IAuthState } from '../../types/auth.type';
import { IFeedRejectErrors, IPost } from '../../types/feed.type';

export const getAllPosts = createAsyncThunk<
  IPost[],
  {},
  { rejectValue: IFeedRejectErrors }
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

export const getPostDetails = createAsyncThunk<
  IPost,
  Partial<{ postId: string }>,
  { rejectValue: IFeedRejectErrors }
>('feed/getPostDetails', async (req, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const response = await axios.get(
      `${process.env.REACT_APP_POSTS_API_URL}/${req.postId}`,
      config
    );

    return response.data.user as IPost;
  } catch (error) {
    return rejectWithValue({
      errorStatus: error.response.status,
      errorMessage: error.message,
    });
  }
});

export const editPost = createAsyncThunk<
  IPost,
  { postId: string; toUpdate: Partial<IPost> },
  { rejectValue: IFeedRejectErrors }
>('feed/editPost', async (req, { getState, rejectWithValue }) => {
  try {
    const {
      auth: { accessToken },
    } = getState() as { auth: IAuthState };

    const body = JSON.stringify(req.toUpdate);

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
    };

    const response = await axios.post(
      `${process.env.REACT_APP_POSTS_API_URL}/${req.postId}`,
      body,
      config
    );

    return response.data.updatedPost as IPost;
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
>('feed/likePost', async (req, { getState, rejectWithValue }) => {
  try {
    const {
      auth: { accessToken },
    } = getState() as { auth: IAuthState };

    const body = JSON.stringify({ userId: req.userId });

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
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
>('feed/unlikePost', async (req, { getState, rejectWithValue }) => {
  try {
    const {
      auth: { accessToken },
    } = getState() as { auth: IAuthState };

    const body = JSON.stringify({ userId: req.userId });

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
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
>('feed/commentPost', async (req, { getState, rejectWithValue }) => {
  try {
    const {
      auth: { accessToken },
    } = getState() as { auth: IAuthState };

    const body = JSON.stringify({
      userId: req.userId,
      commentText: req.commentText,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
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

export const createPost = createAsyncThunk<
  IPost,
  Partial<IPost>,
  { rejectValue: IFeedRejectErrors }
>('feed/createPost', async (req, { getState, rejectWithValue }) => {
  try {
    const {
      auth: { accessToken },
    } = getState() as { auth: IAuthState };

    const body = JSON.stringify(req);

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
    };

    const response = await axios.post(
      `${process.env.REACT_APP_POSTS_API_URL}/create`,
      body,
      config
    );

    return response.data.addedPost as IPost;
  } catch (error) {
    return rejectWithValue({
      errorStatus: error.response.status,
      errorMessage: error.message,
    });
  }
});
