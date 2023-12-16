// This basically gets the first 10 subreddits which are under the popular category
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const base_url = 'https://www.reddit.com/r/popular/rising.json?geo_filter=uk&limit=10';


export const fetchSubredditData = createAsyncThunk(
    'posts/fetchSubredditData',
    async () => {
        try {
            const response = await axios.get(base_url);
            return response.data.data.children;
        } catch(err) {
            return err.message;
        }
    }
);