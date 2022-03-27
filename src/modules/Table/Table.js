import React, { useEffect, useState } from 'react';
import { FaSort } from 'react-icons/fa';
import { formatDate } from './utils';
import { url } from './constants';

import Pagination from '../../components/pagination/Pagination';
import * as styles from './Table.css';

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
          <thead className={styles.thead}>
            <tr>
              <th scope="col" className={styles.th}>
                Username
              </th>
              <th scope="col" className={styles.th}>
                <div className={styles.wrapperTitle}>
                  <span>Name</span>
                  <button><FaSort /></button>
                </div>
              </th>
              <th scope="col" className={styles.th}>
                <div className={styles.wrapperTitle}>
                  <span>Email</span>
                  <button><FaSort /></button>
                </div>
              </th>
              <th scope="col" className={styles.th}>
                <div className={styles.wrapperTitle}>
                  <span>Gender</span>
                  <button><FaSort /></button>
                </div>
              </th>
              <th scope="col" className={styles.th}>
                <div className={styles.wrapperTitle}>
                  <span>Registered Date</span>
                  <button><FaSort /></button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map(user => {
              return (
                <tr className={styles.trFirst}>
                  <th scope="row" className={styles.scopeRow}>
                    {user.login.username}
                  </th>
                  <td className={styles.td}>
                    {`${user.name.first} ${user.name.last}`}
                  </td>
                  <td className={styles.td}>
                    {user.email}
                  </td>
                  <td className={styles.td}>
                    {user.gender}
                  </td>
                  <td className={styles.td}>
                    {formatDate(new Date(user.registered.date))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination />
    </>
  );
};

export default Table;