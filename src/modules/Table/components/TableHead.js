import React, { useState } from 'react';
import * as styles from '../Table.css';
import RenderIcons from './RenderIcons';

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
        <th scope="col" className={styles.th}>
          <div className={styles.wrapperTitle}>
            <span className={styles.spanTitle}>Name</span>
            <button onClick={onClickHandlerIsSortName}>
              <RenderIcons state={isSortName} />
            </button>
          </div>
        </th>
        <th scope="col" className={styles.th}>
          <div className={styles.wrapperTitle}>
            <span className={styles.spanTitle}>Email</span>
            <button onClick={onClickHandlerIsSortEmail}>
              <RenderIcons state={isSortEmail} />
            </button>
          </div>
        </th>
        <th scope="col" className={styles.th}>
          <div className={styles.wrapperTitle}>
            <span className={styles.spanTitle}>Gender</span>
            <button onClick={onClickHandlerIsSortGender}>
              <RenderIcons state={isSortGender} />
            </button>
          </div>
        </th>
        <th scope="col" className={styles.th}>
          <div className={styles.wrapperTitle}>
            <span className={styles.spanTitle}>Registered Date</span>
            <button onClick={onClickHandlerIsSortRegisteredDate}>
              <RenderIcons state={isSortRegisteredDate} />
            </button>
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;