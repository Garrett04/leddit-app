// This basically gets the first 10 subreddits which are under the popular category
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

let url = 'https://www.reddit.com/';
let endpoint = 'r/popular.json?limit=10';

let search_url = 'https://www.reddit.com/search.json';
let subreddit_url = 'https://www.reddit.com/subreddits/search.json?q=computer+science&limit=30';

// Will return a response of 10 posts.
export const fetchSubredditPosts = createAsyncThunk(
    'posts/fetchSubredditPosts',
    async ({subreddit, sort}) => {
        if (sort) {
            endpoint = `r/popular/${sort}.json?limit=10`; // To sort according to selected value
        }
        if (subreddit && sort) {
            endpoint = `r/${subreddit}/${sort}.json?limit=10`; // To get posts according to subreddit.
        } else if (subreddit) {
            endpoint = `r/${subreddit}.json?limit=10`;
        }
        try {
            const response = await axios.get(url + endpoint);
            return response.data.data.children;
        } catch(err) {
            return err.message;
        }
    }
);

// Will return data by search term inputted in the search bar.
export const fetchDataBySearchTerm = createAsyncThunk(
    'posts/fetchDataBySearchTerm',
    async ({term, sort}) => {
        // console.log(sort);
        try {
            const response = await axios.get(search_url + `?q=${term}&sort=${sort}&limit=10`);
            return response.data.data.children;
        } catch (err) {
            return err.message;
        }
    }
)

// Sort options
// https://www.reddit.com/search?q=trees&sort=relevance
// https://www.reddit.com/search?q=trees&sort=hot
// https://www.reddit.com/search?q=trees&sort=top
// https://www.reddit.com/search?q=trees&sort=new
// https://www.reddit.com/search?q=trees&sort=comments

// Will return a list of subreddits
export const fetchSubredditData = createAsyncThunk(
    'subreddits/fetchSubredditData',
    async () => {
        try {
            const response = await axios.get(subreddit_url);
            return response.data.data.children;
        } catch (err) {
            return err.message;
        }
    }
)