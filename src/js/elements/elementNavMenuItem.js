import { el } from 'redom';
import { getMenuItem } from '../utils';
import { openPage } from '../routing';

export default function elementNavMenuItem(id, showShortNames, className) {
  const item = getMenuItem(id);
  if (!item) return;

  const link = el(`li.menu-item.${className}__menu-item`, [
    showShortNames ? item.captionShort : item.caption,
  ]);
  link.addEventListener('click', () => openPage(id));

  return link;
}
