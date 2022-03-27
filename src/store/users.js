import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload
    }
  }
});

export const usersActions = usersSlice.actions;

export default usersSlice.reducer;