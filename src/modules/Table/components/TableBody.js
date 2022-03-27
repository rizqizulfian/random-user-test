import React from 'react';
import TableBodyItems from './TableBodyItems';

const TableBody = ({ users }) => {

  return (
    <tbody>
      {users?.map((user, i) => {
        return <TableBodyItems key={i} user={user} />
      })}
    </tbody>
  );
};

export default TableBody;