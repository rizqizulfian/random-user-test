import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './users/users';

const store = configureStore({
  reducer: usersSlice
});

export default store;