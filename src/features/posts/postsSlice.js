import { createSlice } from "@reduxjs/toolkit";
import { 
    fetchPosts, 
    fetchDataBySearchTerm,
} from "../../data/redditData";

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
                state.subredditPosts[id].likeCount++;
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
                state.subredditPosts[id].likeCount--;
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
            // fetchPosts
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                const data = action.payload.map((data) => 
                    data.data
                )
                state.posts = data;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
            // fetchDataBySearchTerm
            .addCase(fetchDataBySearchTerm.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchDataBySearchTerm.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                const data = action.payload.map((data) => 
                    data.data
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