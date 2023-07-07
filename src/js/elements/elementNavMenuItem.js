import { el } from 'redom';
import { getMenuItem } from '../utils';

export default function elementNavMenuItem(id, showShortNames, className) {
  const item = getMenuItem(id);
  if (!item) return;

  return el(`li.${className}__menu-item`, [
    showShortNames ? item.captionShort : item.caption,
  ]);
}
