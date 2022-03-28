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
  usersPage: [],
  isLoading: true,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
      console.log('ini masuk setUsers')
      const { payload } = action;
      state.isReset = false;
      if (payload.page === 2) {
        state.users = payload.user;
        state.usersPage = [[...state.usersDefault], [...payload.user]];
      } else {
        state.usersDefault = payload.user;
        state.users = payload.user;
      }
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
    },
    getUserPage(state, action) {
      console.log('ini masuk getUserPage')
      state.usersDefault = [...state.usersPage[action.payload - 1]];
      state.users = [...state.usersPage[action.payload - 1]];
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    }
  }
});

export const usersActions = usersSlice.actions;

export default usersSlice.reducer;