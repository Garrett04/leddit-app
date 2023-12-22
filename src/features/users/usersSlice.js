import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../../data/redditData';

const initialState = {
  users: [],
  status: 'idle',
  error: null
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        const data = action.payload.map((data) => data.data)
        
        state.users = data;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      })
  }
})

export const selectAllUsers = (state) => state.users.users;
export const getUsersStatus = (state) => state.users.status;
export const getUsersError = (state) => state.users.error;

export default usersSlice.reducer;