import React from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import * as styles from './Pagination.css';

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.riArrowRightSLine}>
        <RiArrowLeftSLine />
      </button>

      <button className={styles.paginations}>
        1
      </button>
      <button className={styles.paginations}>
        2
      </button>
      <button className={styles.paginations}>
        3
      </button>
      
      <button className={styles.riArrowLeftSLine}>
        <RiArrowRightSLine />
      </button>
    </div>
  )
};

export default Pagination;