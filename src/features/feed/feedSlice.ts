import { createSlice } from '@reduxjs/toolkit';
import { IFeedState } from '../../types/feed.type';
import { getAllPosts } from './feedActions';

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
  },
});

export default feedSlice.reducer;
