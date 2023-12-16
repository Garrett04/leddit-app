import { createSlice } from "@reduxjs/toolkit";
import { fetchSubredditData, fetchDataBySearchTerm } from "../../data/redditData";

const initialState = {
    posts: [],
    status: 'idle',
    error: null
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        likePost: {
            reducer(state, action) {
                const { id } = action.payload;
                state.posts[id].likeCount++;
            },
            prepare(id) {
                return {
                    payload: {
                        id
                    }
                }
            }
        },
        dislikePost: {
            reducer(state, action) {
                const { id } = action.payload;
                state.posts[id].likeCount--;
            },
            prepare(id) {
                return {
                    payload: {
                        id
                    }
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder
            // fetchSubredditData
            .addCase(fetchSubredditData.pending, (state, action) => {
                state.status = 'pending';
            })
            .addCase(fetchSubredditData.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                const data = action.payload.map((data) => 
                    data.data
                )
                state.posts = state.posts.concat(data);
            })
            .addCase(fetchSubredditData.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
            // fetchDataBySearchTerm
            .addCase(fetchDataBySearchTerm.pending, (state, action) => {
                state.status = 'pending';
            })
            .addCase(fetchDataBySearchTerm.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                const data = action.payload.map((data) => 
                    data.data // to change
                )
                state.posts = data;
            })
            .addCase(fetchDataBySearchTerm.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
    }
})

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export const { likePost, dislikePost } = postsSlice.actions;

export default postsSlice.reducer;