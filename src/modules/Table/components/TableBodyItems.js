import React from 'react';
import { useSelector } from 'react-redux';
import { formatDate, stylesTdRow } from '../utils';
import * as styles from '../Table.css';

const TableBodyItems = ({ user }) => {
  const { login, email, name, gender, registered } = user;
  const activeRow = useSelector(state => state.activeRow);

  const stylesTdRowNames = stylesTdRow('Name', activeRow, styles.td);
  const stylesTdRowEmail = stylesTdRow('Email', activeRow, styles.td);
  const stylesTdRowGender = stylesTdRow('Gender', activeRow, styles.td);
  const stylesTdRowRegisteredDate = stylesTdRow('Registered Date', activeRow, styles.td);

  return (
    <tr className={styles.trTbody}>
      <th scope="row" className={styles.scopeRow}>
        {login.username}
      </th>
      <td className={stylesTdRowNames}>
        {`${name.first} ${name.last}`}
      </td>
      <td className={stylesTdRowEmail}>
        {email}
      </td>
      <td className={stylesTdRowGender}>
        {gender}
      </td>
      <td className={stylesTdRowRegisteredDate}>
        {formatDate(new Date(registered.date))}
      </td>
    </tr>
  );
};

export default TableBodyItems;