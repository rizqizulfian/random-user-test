import React, { useEffect, useState } from 'react';
import * as styles from '../Table.css';
import { RenderThItem } from './RenderComponents';
import { usersActions } from '../../../store/users/users';
import { useDispatch, useSelector } from 'react-redux';
import { urlRandomUser } from '../../../utils/utils';

const TableHead = () => {
  const dispatch = useDispatch();
  const [isSortName, setIsSortName] = useState(null);
  const [isSortEmail, setIsSortEmail] = useState(null);
  const [isSortGender, setIsSortGender] = useState(null);
  const [isSortRegisteredDate, setIsSortRegisteredDate] = useState(null);
  const activeRow = useSelector(state => state.activeRow);
  const isReset = useSelector(state => state.isReset);

  useEffect(() => {
    setIsSortName(null);
    setIsSortEmail(null);
    setIsSortGender(null);
    setIsSortRegisteredDate(null);
  }, [isReset]);

  const onClickHandlerIsSortName = async () => {
    setIsSortEmail(null);
    setIsSortGender(null);
    setIsSortRegisteredDate(null);
    setIsSortName(prevState => {
      dispatch(usersActions.sortUsersName(!prevState))
      return !prevState
    });
    dispatch(usersActions.setActiveRow('Name'));
    // just trigger api call
    const sortOrder = !isSortName ? 'ascend' : 'descend';
    await fetch(urlRandomUser({ sortBy: 'name', sortOrder }));
  };

  const onClickHandlerIsSortEmail = async () => {
    setIsSortName(null);
    setIsSortGender(null);
    setIsSortRegisteredDate(null);
    setIsSortEmail(prevState => {
      dispatch(usersActions.sortUsersEmail(!prevState))
      return !prevState
    });
    dispatch(usersActions.setActiveRow('Email'));
    // just trigger api call
    const sortOrder = !isSortEmail ? 'ascend' : 'descend';
    await fetch(urlRandomUser({ sortBy: 'email', sortOrder }));
  };

  const onClickHandlerIsSortGender = async () => {
    setIsSortName(null);
    setIsSortEmail(null);
    setIsSortRegisteredDate(null);
    setIsSortGender(prevState => {
      dispatch(usersActions.sortUsersGender(!prevState))
      return !prevState
    });
    dispatch(usersActions.setActiveRow('Gender'));
    // just trigger api call
    const sortOrder = !isSortGender ? 'ascend' : 'descend';
    await fetch(urlRandomUser({ sortBy: 'gender', sortOrder }));
  };

  const onClickHandlerIsSortRegisteredDate = async () => {
    setIsSortName(null);
    setIsSortEmail(null);
    setIsSortGender(null);
    setIsSortRegisteredDate(prevState => {
      dispatch(usersActions.sortUsersRegisteredDate(!prevState))
      return !prevState
    });
    dispatch(usersActions.setActiveRow('Registered Date'));
    // just trigger api call
    const sortOrder = !isSortRegisteredDate ? 'ascend' : 'descend';
    await fetch(urlRandomUser({ sortBy: 'registered_date', sortOrder }));
  };

  return (
    <thead className={styles.thead}>
      <tr>
        <th scope="col" className={styles.th}>
          Username
        </th>
        <RenderThItem name='Name' onClickHandler={onClickHandlerIsSortName} state={isSortName} activeRow={activeRow} />
        <RenderThItem name='Email' onClickHandler={onClickHandlerIsSortEmail} state={isSortEmail} activeRow={activeRow} />
        <RenderThItem name='Gender' onClickHandler={onClickHandlerIsSortGender} state={isSortGender} activeRow={activeRow} />
        <RenderThItem name='Registered Date' onClickHandler={onClickHandlerIsSortRegisteredDate} state={isSortRegisteredDate} activeRow={activeRow} />
      </tr>
    </thead>
  );
};

export default TableHead;