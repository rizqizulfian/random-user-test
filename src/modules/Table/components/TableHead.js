import React, { useState } from 'react';
import * as styles from '../Table.css';
import { RenderThItem } from './RenderComponents';
import { usersActions } from '../../../store/users/users';
import { useDispatch } from 'react-redux';

const TableHead = () => {
  const dispatch = useDispatch();
  const [isSortName, setIsSortName] = useState(null);
  const [isSortEmail, setIsSortEmail] = useState(null);
  const [isSortGender, setIsSortGender] = useState(null);
  const [isSortRegisteredDate, setIsSortRegisteredDate] = useState(null);

  const onClickHandlerIsSortName = () => {
    setIsSortEmail(null);
    setIsSortGender(null);
    setIsSortRegisteredDate(null);
    setIsSortName(prevState => {
      dispatch(usersActions.sortUsersName(!prevState))
      return !prevState
    });
  };

  const onClickHandlerIsSortEmail = () => {
    setIsSortName(null);
    setIsSortGender(null);
    setIsSortRegisteredDate(null);
    setIsSortEmail(prevState => {
      dispatch(usersActions.sortUsersEmail(!prevState))
      return !prevState
    });
  };

  const onClickHandlerIsSortGender = () => {
    setIsSortName(null);
    setIsSortEmail(null);
    setIsSortRegisteredDate(null);
    setIsSortGender(prevState => {
      dispatch(usersActions.sortUsersGender(!prevState))
      return !prevState
    });
  };

  const onClickHandlerIsSortRegisteredDate = () => {
    setIsSortName(null);
    setIsSortEmail(null);
    setIsSortGender(null);
    setIsSortRegisteredDate(prevState => {
      dispatch(usersActions.sortUsersRegisteredDate(!prevState))
      return !prevState
    });
  };

  return (
    <thead className={styles.thead}>
      <tr>
        <th scope="col" className={styles.th}>
          Username
        </th>
        <RenderThItem name='Name' onClickHandler={onClickHandlerIsSortName} state={isSortName} />
        <RenderThItem name='Email' onClickHandler={onClickHandlerIsSortEmail} state={isSortEmail} />
        <RenderThItem name='Gender' onClickHandler={onClickHandlerIsSortGender} state={isSortGender} />
        <RenderThItem name='Registered Date' onClickHandler={onClickHandlerIsSortRegisteredDate} state={isSortRegisteredDate} />
      </tr>
    </thead>
  );
};

export default TableHead;