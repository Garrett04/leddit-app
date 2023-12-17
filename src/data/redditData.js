// This basically gets the first 10 subreddits which are under the popular category
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const base_url = 'https://www.reddit.com/r/PS4/hot.json?limit=10';

// Will return a response of 10 posts.
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

// Will return data by search term inputted in the search bar.
export const fetchDataBySearchTerm = createAsyncThunk(
    'posts/fetchDataBySearchTerm',
    async (term) => {
        try {
            const response = await axios.get(`https://www.reddit.com/search.json?q=${term}&limit=10`);
            return response.data.data.children;
        } catch (err) {
            return err.message;
        }
    }
)