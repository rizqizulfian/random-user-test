import { SORT_ICONS } from './constants';

export const padTo2Digits = (num) => {
  return num.toString().padStart(2, '0');
}

export const formatDate = (date) => {
  return (
    [
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
      date.getFullYear(),
    ].join('-') +
    ' ' +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(':')
  );
}

export const renderIcons = ({ state }) => {
  if (state === null) return SORT_ICONS.default;
  else if (state) return SORT_ICONS.active;
  else return SORT_ICONS.inActive;
};

export const stylesTdRow = (name, activeRow, styles) => {
  return activeRow === name ? `${styles} bg-gray-100 border` : styles;
};