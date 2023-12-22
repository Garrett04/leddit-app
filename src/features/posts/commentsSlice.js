import { createSlice } from "@reduxjs/toolkit";
import { fetchComments } from "../../data/redditData";

const initialState = {
    comments: [],
    status: 'idle',
    error: null
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    extraReducers: (builder) => {
        builder
            // fetchComments
            .addCase(fetchComments.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                const data = action.payload.map((data) => 
                    data.data
                )
                console.log(data);
                state.comments = data;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
    }
})

export const selectAllComments = (state) => state.comments.comments;
export const getCommentsStatus = (state) => state.comments.status;
export const getCommentsError = (state) => state.comments.error;

export default commentsSlice.reducer;