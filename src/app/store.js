import { configureStore } from '@reduxjs/toolkit';
import subredditPostsReducer from '../features/subredditPosts/subredditPostsSlice';

export const store = configureStore({
  reducer: {
    subredditPosts: subredditPostsReducer,
  },
});