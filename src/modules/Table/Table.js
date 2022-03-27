import React, { useEffect, useState } from 'react';
import { url } from './constants';

import Pagination from '../../components/pagination/Pagination';
import * as styles from './Table.css';
import TableBody from './components/TableBody';
import TableHead from './components/TableHead';

const Table = () => {
  const [users, setUsers] = useState([]);

  const fetchUserData = async () => {
    const resp = await fetch(url);
    const user = await resp.json();
    setUsers(user.results);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <div className={styles.containerTable}>
        <table className={styles.table}>
          <TableHead />
          <TableBody users={users} />
        </table>
      </div>
      <Pagination />
    </>
  );
};

export default Table;