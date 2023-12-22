import { configureStore } from '@reduxjs/toolkit';

import subredditPostsReducer from '../features/subredditPosts/subredditPostsSlice';
import subredditsReducer from '../features/subreddits/subredditsSlice';
import usersReducer from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    subredditPosts: subredditPostsReducer,
    subreddits: subredditsReducer,
    users: usersReducer,
  },
});