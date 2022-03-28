import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersActions } from '../../store/users/users';
import { urlRandomUser } from '../../utils/utils';

import Pagination from '../../components/pagination/Pagination';
import * as styles from './Table.css';
import TableBody from './components/TableBody';
import TableHead from './components/TableHead';

const Table = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const isLoading = useSelector(state => state.isLoading);

  const fetchUserData = async () => {
    dispatch(usersActions.setIsLoading(true));
    const resp = await fetch(urlRandomUser({}));
    const user = await resp.json();
    dispatch(usersActions.setUsers({ user: user.results }));
    dispatch(usersActions.setIsLoading(false));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <div className={styles.containerTable}>
        <table className={styles.table}>
          <TableHead />
          {!isLoading && users && <TableBody users={users} />}
        </table>
        {isLoading && <span className="grid justify-items-center border-b py-3 text-sm text-gray-600">Loading...</span>}
      </div>
      <Pagination />
    </>
  );
};

export default Table;