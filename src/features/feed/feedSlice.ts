import { createSlice } from '@reduxjs/toolkit';
import { IFeedState } from '../../types/feed.type';
import {
  commentPost,
  createPost,
  editPost,
  getAllPosts,
  likePost,
  unlikePost,
} from './feedActions';

const initialState: IFeedState = {
  loading: {
    feedLoading: false,
    postLoading: false,
    ctaLoading: false,
    commentLoading: false,
  },
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
      state.loading.feedLoading = true;
    });

    builder.addCase(getAllPosts.fulfilled, (state, { payload }) => {
      state.loading.feedLoading = false;
      state.posts = payload;
    });

    builder.addCase(getAllPosts.rejected, (state, { payload }) => {
      state.loading.feedLoading = false;
      state.error = payload;
    });

    // edit post
    builder.addCase(editPost.pending, (state) => {
      state.loading.feedLoading = true;
    });

    builder.addCase(editPost.fulfilled, (state, { payload }) => {
      state.loading.feedLoading = false;

      const postIndex = state.posts.findIndex(
        (item) => item._id === payload._id
      );

      state.posts[postIndex] = payload;
    });

    builder.addCase(editPost.rejected, (state, { payload }) => {
      state.loading.feedLoading = false;
    });

    // like post
    builder.addCase(likePost.pending, (state) => {
      state.loading.ctaLoading = true;
    });

    builder.addCase(likePost.fulfilled, (state, { payload }) => {
      state.loading.ctaLoading = false;

      const postIndex = state.posts.findIndex(
        (item) => item._id === payload._id
      );

      state.posts[postIndex].likes = payload.likes;
    });

    builder.addCase(likePost.rejected, (state, { payload }) => {
      state.loading.ctaLoading = false;
    });

    // unlike post
    builder.addCase(unlikePost.pending, (state) => {
      state.loading.ctaLoading = true;
    });

    builder.addCase(unlikePost.fulfilled, (state, { payload }) => {
      state.loading.ctaLoading = false;

      const postIndex = state.posts.findIndex(
        (item) => item._id === payload._id
      );

      state.posts[postIndex].likes = payload.likes;
    });

    builder.addCase(unlikePost.rejected, (state, { payload }) => {
      state.loading.ctaLoading = false;
    });

    // comment post
    builder.addCase(commentPost.pending, (state) => {
      state.loading.commentLoading = true;
    });

    builder.addCase(commentPost.fulfilled, (state, { payload }) => {
      state.loading.commentLoading = false;

      const postIndex = state.posts.findIndex(
        (item) => item._id === payload._id
      );

      state.posts[postIndex].comments = payload.comments;
    });

    builder.addCase(commentPost.rejected, (state, { payload }) => {
      state.loading.commentLoading = false;
    });

    // create post
    builder.addCase(createPost.pending, (state) => {
      state.loading.feedLoading = true;
    });

    builder.addCase(createPost.fulfilled, (state, { payload }) => {
      state.loading.feedLoading = false;

      state.posts = [...state.posts, payload];
    });

    builder.addCase(createPost.rejected, (state, { payload }) => {
      state.loading.feedLoading = false;
    });
  },
});

export default feedSlice.reducer;
