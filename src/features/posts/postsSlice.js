import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {
        '1': {
            id: '1',
            title: 'Example Title 1',
            likeCount: 27.8,
            src: './images/example image 1.jpg',
            user: 'RandomUser1',
            timestamp: '8 minutes',
            commentCount: '245',
        },

        '2': {
            id: '2',
            title: 'Example Title 2',
            likeCount: 28.5,
            src: './images/example image 2.jpg',
            user: 'RandomUser2',
            timestamp: '10 minutes',
            commentCount: '345'
        }
    }
}

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

export const selectAllPosts = (state) => state.posts.data;
export const { likePost, dislikePost } = postsSlice.actions;
export default postsSlice.reducer;