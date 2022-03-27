import React from 'react';
import * as styles from '../Table.css';
import { renderIcons } from '../utils';

export const RenderThItem = ({ name, onClickHandler, state }) => {

  return (
    <>
      <th scope="col" className={styles.th}>
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