import { createSlice } from '@reduxjs/toolkit';
import {
  addFullnameProperty,
  sortEmail,
  sortGender,
  sortName,
  sortRegisteredDate
} from './utils';

const initialState = {
  usersDefault: null,
  users: null,
  activeRow: '',
  isReset: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.isReset = false;

      state.usersDefault = action.payload;
      state.users = action.payload
    },
    sortUsersName(state, action) {
      state.isReset = false;

      const { users } = state;
      const { payload } = action;

      const results = addFullnameProperty(users);
      sortName(results, payload);

      state.users = results;
    },
    sortUsersEmail(state, action) {
      state.isReset = false;
      const { payload } = action;

      sortEmail(state.users, payload);
    },
    sortUsersGender(state, action) {
      state.isReset = false;
      const { payload } = action;

      sortGender(state.users, payload);
    },
    sortUsersRegisteredDate(state, action) {
      state.isReset = false;
      const { payload } = action;

      sortRegisteredDate(state.users, payload);
    },
    setActiveRow(state, action) {
      state.isReset = false;
      state.activeRow = action.payload;
    },
    setResetFilter(state) {
      state.activeRow = '';
      state.isReset = true;
      state.users = [...state.usersDefault];
    }
  }
});

export const usersActions = usersSlice.actions;

export default usersSlice.reducer;