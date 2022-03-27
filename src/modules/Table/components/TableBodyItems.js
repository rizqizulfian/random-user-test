import React from 'react';
import * as styles from '../Table.css';
import { formatDate } from '../utils';

const TableBodyItems = ({ user }) => {
  const { login, email, name, gender, registered } = user;

  return (
    <tr className={styles.trTbody}>
      <th scope="row" className={styles.scopeRow}>
        {login.username}
      </th>
      <td className={styles.td}>
        {`${name.first} ${name.last}`}
      </td>
      <td className={styles.td}>
        {email}
      </td>
      <td className={styles.td}>
        {gender}
      </td>
      <td className={styles.td}>
        {formatDate(new Date(registered.date))}
      </td>
    </tr>
  );
};

export default TableBodyItems;