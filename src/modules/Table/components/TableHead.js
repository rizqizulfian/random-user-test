import React, { useState } from 'react';
import * as styles from '../Table.css';
import { RenderThItem } from './RenderComponents';

const TableHead = () => {
  const [isSortName, setIsSortName] = useState(null);
  const [isSortEmail, setIsSortEmail] = useState(null);
  const [isSortGender, setIsSortGender] = useState(null);
  const [isSortRegisteredDate, setIsSortRegisteredDate] = useState(null);

  const onClickHandlerIsSortName = () => {
    setIsSortEmail(null);
    setIsSortGender(null);
    setIsSortRegisteredDate(null);
    setIsSortName(prevState => !prevState);
  };

  const onClickHandlerIsSortEmail = () => {
    setIsSortName(null);
    setIsSortGender(null);
    setIsSortRegisteredDate(null);
    setIsSortEmail(prevState => !prevState);
  };

  const onClickHandlerIsSortGender = () => {
    setIsSortName(null);
    setIsSortEmail(null);
    setIsSortRegisteredDate(null);
    setIsSortGender(prevState => !prevState);
  };

  const onClickHandlerIsSortRegisteredDate = () => {
    setIsSortName(null);
    setIsSortEmail(null);
    setIsSortGender(null);
    setIsSortRegisteredDate(prevState => !prevState);
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