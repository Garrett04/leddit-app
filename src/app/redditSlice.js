import { fetchRedditData } from "../data/redditData";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchRawData = createAsyncThunk(
//   'reddit/fetchRawData',
//   async () => {
//     try {
//       const response = await fetchRedditData();
//       return response.data
//     } catch (err) {
//       console.log(err);
//     }
//   }
// )

export const fetchRawData = async () => {
  try {
    const response = await fetchRedditData();
    return response.data.data.children;
  } catch (err) {
    console.log(err);
  }
}

// const getData = async () => {
//     try {
//       const response = await fetchRedditData();
//       console.log(response.data.data.children[1].data.title);
//     } catch (error) {

//       console.log(error);
//     }
//   };
  

// getData();