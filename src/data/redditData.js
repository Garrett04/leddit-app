// This basically gets the first 10 subreddits which are under the popular category
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

let url = 'https://www.reddit.com/';
let endpoint = 'r/popular.json?limit=10';

let search_url = 'search.json';
let subreddit_url = 'subreddits/search.json?q=computer+science&limit=20';

let users_endpoint = 'users.json?limit=20';

// A list of sort options for reference
// https://www.reddit.com/search?q=trees&sort=relevance
// https://www.reddit.com/search?q=trees&sort=hot
// https://www.reddit.com/search?q=trees&sort=top
// https://www.reddit.com/search?q=trees&sort=new
// https://www.reddit.com/search?q=trees&sort=comments

// Will return a response of 10 posts at the start and fetch again if subreddit and sort are present. 
export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async ({subreddit, sort, user}) => {
        // console.log(user, sort, subreddit);
        if (sort) {
            endpoint = `r/popular/${sort}.json?limit=10`; // To sort according to selected sort value for the popular subreddit
        }
        if (subreddit && sort) {
            endpoint = `r/${subreddit}/${sort}.json?limit=10`; // To get posts according to subreddit and its sort value.
        } else if (user && sort) {
            endpoint = `user/${user}.json?sort=${sort}&limit=10`; // To get posts according to user and its sort value.
        } else if (user) {
            endpoint = `user/${user}.json?limit=10`; // To get posts according to user only.
        } else if (subreddit) {
            endpoint = `r/${subreddit}.json?limit=10`; // To get posts according to subreddit only.
        }

        try {
            const response = await axios.get(url + endpoint); // default link: https://www.reddit.com/r/popular.json?limit=10
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
            // To get posts according to search term and sort value. The browser will take care of the url if sort value not present.
            const response = await axios.get(url + search_url + `?q=${term}&sort=${sort}&limit=10`); 
            return response.data.data.children;
        } catch (err) {
            return err.message;
        }
    }
)

// This will return post comments
export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async (permalink) => {
        // console.log(url + permalink);
        try {
            const response = await axios.get(url + permalink + '.json?limit=20'); // permalink is the link for comments for a specific post
            return response.data[1].data.children;
        } catch (err) {
            return err.message;
        }
    }
)

// Will return a list of subreddits
export const fetchSubreddits = createAsyncThunk(
    'subreddits/fetchSubreddits',
    async () => {
        try {
             // To get a list of subreddits which in this case is computer science related subreddits.
            const response = await axios.get(url + subreddit_url);
            return response.data.data.children;
        } catch (err) {
            return err.message;
        }
    }
)

// This will return a list of users
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
    async () => {
        try {
            const response = await axios.get(url + users_endpoint);
            return response.data.data.children;
        } catch (err) {
            return err.message;
        }
    }
)