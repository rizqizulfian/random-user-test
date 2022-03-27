import React from 'react';
import * as styles from '../Table.css';
import { renderIcons } from '../utils';

export const RenderThItem = ({ name, onClickHandler, state, activeRow }) => {
  const isActive = name === activeRow;
  const stylesWrapperTitle = isActive ? `${styles.th} bg-gray-200` : styles.th;

  return (
    <>
      <th scope="col" className={stylesWrapperTitle}>
        <div className={styles.wrapperTitle}>
          <span className={styles.spanTitle}>{name}</span>
          <button onClick={onClickHandler}>
            {renderIcons({ state })}
          </button>
        </div>
      </th>
    </>
  );
};