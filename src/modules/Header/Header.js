import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { usersActions } from '../../store/users/users';
import { urlRandomUser } from '../../utils/utils';

import debounce from 'lodash.debounce';
import * as styles from './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const [reset, setReset] = useState(false);

  const genderHandlerOnChange = (e) => {
    setReset(false);
    fetchUserData(e.target.value);
  };

  const fetchUserData = async (gender) => {
    dispatch(usersActions.setIsLoading(true));
    const resp = await fetch(urlRandomUser({ gender }));
    const user = await resp.json();
    dispatch(usersActions.setUsers({ user: user.results }));
    dispatch(usersActions.setIsLoading(false));
  };

  const fetchSearchData = async (value) => {
    const resp = await fetch(urlRandomUser({ keyword: value }));
    dispatch(usersActions.searchByUsername({ keyword: value }));
  };

  const debouncedOnChangeSearch = debounce((e) => {
    fetchSearchData(e.target.value);
  }, 300);

  const onClickResetFilterButton = () => {
    setReset(true);
    dispatch(usersActions.setResetFilter());
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <label class={styles.labels} for="search">Search</label>
        <div className={styles.wrapperSearchInput}>
          <input
            type="text"
            name="search"
            id="search"
            className={styles.inputSearch}
            onChange={debouncedOnChangeSearch}
            placeholder="Search..."
          />
          <div className={styles.inputSearchWrapperIcon}>
            <button className={styles.inputSearchWrapperIconButton} type="button" id="button-addon2">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.subContainer}>
        <label className={styles.labels} for="gender">Gender</label>
        <select
          id="gender"
          className={styles.inputGenderSelect}
          onChange={genderHandlerOnChange}
        >
          <option value="all" selected={reset ? 'selected' : ''}>ALL</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className={styles.subContainer}>
        <label className={styles.labels}>‎‎ㅤ</label>
        <button class={styles.resetFilterButtons} onClick={onClickResetFilterButton}>
          Reset Filter
        </button>
      </div>
    </div>
  );
};

export default Header;