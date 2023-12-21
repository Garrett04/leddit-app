import { createSlice } from "@reduxjs/toolkit";
import { fetchSubreddits } from "../../data/redditData";

const initialState = {
    subreddits: [],
    status: 'idle',
    error: null
}

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState,
    extraReducers: (builder) => {
        builder
            // fetchSubredditData
            .addCase(fetchSubreddits.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchSubreddits.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                const data = action.payload.map((data) => 
                    data.data
                )
                state.subreddits = data;
            })
            .addCase(fetchSubreddits.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
    }
})

export const selectAllSubreddits = (state) => state.subreddits.subreddits;
export const getSubredditsStatus = (state) => state.subreddits.status;
export const getSubredditsError = (state) => state.subreddits.error;

export default subredditsSlice.reducer;