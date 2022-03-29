import React, { useState } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import * as styles from './Pagination.css';
import { urlRandomUser } from '../../utils/utils';
import { usersActions } from '../../store/users/users';
import { useDispatch } from 'react-redux';

const Pagination = () => {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTouched, setIsTouched] = useState(false);

  const stylesButton1 = currentIndex === 1 ? styles.paginationsActive : styles.paginations;
  const stylesButton2 = currentIndex === 2 ? styles.paginationsActive : styles.paginations;

  // refer to preview of project, it only contains 2 paginations
  // so we hardcode with 2 page and using same button handler
  const buttonClickHandler1 = () => {
    (currentIndex !== 1) && setCurrentIndex(1);
    (currentIndex !== 1) && fetchUserData(1, 10);
  };

  const buttonClickHandler2 = () => {
    (currentIndex !== 2) && setCurrentIndex(2);
    (currentIndex !== 2) && fetchUserData(2, 5);
    setIsTouched(true);
  };

  const fetchUserData = async (page, pageSize) => {
    dispatch(usersActions.setIsLoading(true));
    dispatch(usersActions.setResetFilter());
    if (!isTouched) {
      const resp = await fetch(urlRandomUser({ page, pageSize }));
      const user = await resp.json();
      dispatch(usersActions.setUsers({ user: user.results, page }));
    } else {
      dispatch(usersActions.getUserPage(page));
    }
    dispatch(usersActions.setIsLoading(false));
  };

  return (
    <div className={styles.container}>
      <button className={styles.riArrowLeftSLine} disabled={currentIndex === 1} onClick={buttonClickHandler1}>
        <RiArrowLeftSLine />
      </button>

      <button className={stylesButton1} onClick={buttonClickHandler1}>
        1
      </button>
      <button className={stylesButton2} onClick={buttonClickHandler2}>
        2
      </button>

      <button className={styles.riArrowLeftSLine} disabled={currentIndex === 2} onClick={buttonClickHandler2}>
        <RiArrowRightSLine />
      </button>
    </div>
  )
};

export default Pagination;