import { configureStore } from '@reduxjs/toolkit';

import postsReducer from '../features/posts/postsSlice';
import subredditsReducer from '../features/subreddits/subredditsSlice';
import usersReducer from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    subreddits: subredditsReducer,
    users: usersReducer,
  },
});