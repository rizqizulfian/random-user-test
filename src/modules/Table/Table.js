import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersActions } from '../../store/users/users';
import { URL } from './constants';

import Pagination from '../../components/pagination/Pagination';
import * as styles from './Table.css';
import TableBody from './components/TableBody';
import TableHead from './components/TableHead';

const Table = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  const fetchUserData = async () => {
    const resp = await fetch(URL);
    const user = await resp.json();
    dispatch(usersActions.setUsers(user.results));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <div className={styles.containerTable}>
        <table className={styles.table}>
          <TableHead />
          {users && <TableBody users={users} />}
        </table>
        {users ? '' : <span className="grid justify-items-center border-b py-3 text-sm text-gray-600">Loading...</span>}
      </div>
      <Pagination />
    </>
  );
};

export default Table;