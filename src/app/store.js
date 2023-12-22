import { configureStore } from '@reduxjs/toolkit';

import postsReducer from '../features/posts/postsSlice';
import subredditsReducer from '../features/subreddits/subredditsSlice';
import usersReducer from '../features/users/usersSlice';
import commentsReducer from '../features/posts/commentsSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    subreddits: subredditsReducer,
    users: usersReducer,
  },
});