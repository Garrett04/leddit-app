import { createSlice } from "@reduxjs/toolkit";
import { 
    fetchSubredditPosts, 
    fetchDataBySearchTerm,
} from "../../data/redditData";

const initialState = {
    subredditPosts: [],
    status: 'idle',
    error: null
};

const subredditPostsSlice = createSlice({
    name: 'subredditPosts',
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
            // fetchSubredditPosts
            .addCase(fetchSubredditPosts.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchSubredditPosts.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                const data = action.payload.map((data) => 
                    data.data
                )
                state.subredditPosts = data;
            })
            .addCase(fetchSubredditPosts.rejected, (state, action) => {
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
                    data.data // to change
                )
                state.subredditPosts = data;
            })
            .addCase(fetchDataBySearchTerm.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
    }
})

export const selectAllData = (state) => state.subredditPosts.subredditPosts;
export const getPostsStatus = (state) => state.subredditPosts.status;
export const getPostsError = (state) => state.subredditPosts.error;

export const { likePost, dislikePost } = subredditPostsSlice.actions;

export default subredditPostsSlice.reducer;