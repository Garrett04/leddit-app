import { createSlice } from "@reduxjs/toolkit";
import { fetchSubredditData } from "../../data/redditData";

const initialState = {
    subreddits: [],
    status: 'idle',
    error: null
}

const subredditData = createSlice({
    name: 'subreddits',
    initialState,
    extraReducers: (builder) => {
        builder
            // fetchSubredditData
            .addCase(fetchSubredditData.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchSubredditData.fulfilled, (state, action) => {
                state.status = 'fulfilled';

                const data = action.payload.map((data) => 
                    data.data
                )

                state.posts = data;
            })
            .addCase(fetchSubredditData.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
    }
})

export const selectAllSubreddits = (state) => state.subreddits.subreddits;
export const getSubredditsStatus = (state) => state.subreddits.status;
export const getSubredditsError = (state) => state.subreddits.error;

export default subredditData.reducer;