import { createSlice } from "@reduxjs/toolkit";
import { jsonData } from "../../data/Reddit";

const initialState = JSON.parse(jsonData);

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        likePost: {
            reducer(state, action) {
                const { id } = action.payload;
                state.data[id].likeCount++;
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
                state.date[id].likeCount--;
            },
            prepare(id) {
                return {
                    payload: {
                        id
                    }
                }
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts.posts;
export const { likePost, dislikePost } = postsSlice.actions;
export default postsSlice.reducer;