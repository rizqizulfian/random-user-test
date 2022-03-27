import React from 'react';
import { FaSort } from 'react-icons/fa';
import * as styles from '../Table.css';

const TableHead = () => {

  return (
    <thead className={styles.thead}>
      <tr>
        <th scope="col" className={styles.th}>
          Username
        </th>
        <th scope="col" className={styles.th}>
          <div className={styles.wrapperTitle}>
            <span className={styles.spanTitle}>Name</span>
            <button><FaSort /></button>
          </div>
        </th>
        <th scope="col" className={styles.th}>
          <div className={styles.wrapperTitle}>
            <span className={styles.spanTitle}>Email</span>
            <button><FaSort /></button>
          </div>
        </th>
        <th scope="col" className={styles.th}>
          <div className={styles.wrapperTitle}>
            <span className={styles.spanTitle}>Gender</span>
            <button><FaSort /></button>
          </div>
        </th>
        <th scope="col" className={styles.th}>
          <div className={styles.wrapperTitle}>
            <span className={styles.spanTitle}>Registered Date</span>
            <button><FaSort /></button>
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;