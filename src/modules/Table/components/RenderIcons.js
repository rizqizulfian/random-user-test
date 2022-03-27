import React from 'react';
import { SORT_ICONS } from '../constants';

const RenderIcons = ({ state }) => {
  if (state === null) return SORT_ICONS.default;
  else if (state) return SORT_ICONS.active;
  else return SORT_ICONS.inActive;
};

export default RenderIcons;