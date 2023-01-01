import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../features/modal/modalSlice';
import autthReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: autthReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
