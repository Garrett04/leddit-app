// Not in use for now

// import { createSlice } from "@reduxjs/toolkit";
// import { jsonData } from "../../data/Reddit";

// const initialState = {
//     // add initial states for posts
// };

// const postsSlice = createSlice({
//     name: 'posts',
//     initialState,
//     reducers: {
//         likePost: {
//             reducer(state, action) {
//                 const { id } = action.payload;
//                 state.posts[id].likeCount++;
//             },
//             prepare(id) {
//                 return {
//                     payload: {
//                         id
//                     }
//                 }
//             }
//         },
//         dislikePost: {
//             reducer(state, action) {
//                 const { id } = action.payload;
//                 state.posts[id].likeCount--;
//             },
//             prepare(id) {
//                 return {
//                     payload: {
//                         id
//                     }
//                 }
//             }
//         }
//     }
// })

// export const selectAllPosts = (state) => state.posts.posts;
// export const { likePost, dislikePost } = postsSlice.actions;
// export default postsSlice.reducer;

import { fetchRawData } from "../../app/redditSlice";

// console.log(fetchRawData()); // This logs the output of the 10 subreddits

const data = fetchRawData();
console.log(data);
// console.log(Object.values(data).forEach(element => {
//     console.log(element)
// }));