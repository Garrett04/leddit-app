import { configureStore } from '@reduxjs/toolkit';

import subredditPostsReducer from '../features/subredditPosts/subredditPostsSlice';
import subredditsReducer from '../features/subreddits/subredditsSlice';

export const store = configureStore({
  reducer: {
    subredditPosts: subredditPostsReducer,
    subreddits: subredditsReducer,
  },
});