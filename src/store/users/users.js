import { createSlice } from '@reduxjs/toolkit';
import {
  addFullnameProperty,
  sortEmail,
  sortGender,
  sortName,
  sortRegisteredDate
} from './utils';

const initialState = {
  users: null,
  activeRow: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
      console.log('ini action', action.payload)
      state.users = action.payload
    },
    sortUsersName(state, action) {
      const { users } = state;
      const { payload } = action;

      const results = addFullnameProperty(users);
      sortName(results, payload);

      state.users = results;
    },
    sortUsersEmail(state, action) {
      const { payload } = action;

      sortEmail(state.users, payload);
    },
    sortUsersGender(state, action) {
      const { payload } = action;

      sortGender(state.users, payload);
    },
    sortUsersRegisteredDate(state, action) {
      const { payload } = action;

      sortRegisteredDate(state.users, payload);
    },
    setActiveRow(state, action) {
      state.activeRow = action.payload;
    }
  }
});

export const usersActions = usersSlice.actions;

export default usersSlice.reducer;