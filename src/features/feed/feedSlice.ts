import { createSlice } from '@reduxjs/toolkit';
import { IFeedState } from '../../types/feed.type';
import { getAllPosts, likePost, unlikePost } from './feedActions';

const initialState: IFeedState = {
  loading: false,
  posts: [],
  error: null,
};

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get all posts reducers
    builder.addCase(getAllPosts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getAllPosts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.posts = payload;
    });

    builder.addCase(getAllPosts.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    // like post
    builder.addCase(likePost.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(likePost.fulfilled, (state, { payload }) => {
      state.loading = false;

      const postIndex = state.posts.findIndex(
        (item) => item._id === payload._id
      );

      state.posts[postIndex] = payload;
    });

    builder.addCase(likePost.rejected, (state, { payload }) => {
      state.loading = false;
      console.log('ab kya karun?');
    });

    // unlike post
    builder.addCase(unlikePost.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(unlikePost.fulfilled, (state, { payload }) => {
      console.log({ payload });

      state.loading = false;

      const postIndex = state.posts.findIndex(
        (item) => item._id === payload._id
      );

      state.posts[postIndex].likes = state.posts[postIndex].likes.filter(
        (item) => item !== payload._id
      );
    });

    builder.addCase(unlikePost.rejected, (state, { payload }) => {
      state.loading = false;
      console.log('ab kya karun?');
    });
  },
});

export default feedSlice.reducer;
