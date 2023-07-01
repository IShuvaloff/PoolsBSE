import { el } from 'redom';
import { getMenuItem } from '../utils';

export default function elementFooterMenuItem(id) {
  const item = getMenuItem(id);
  if (!item) return;

  return el('li.footer__menu-item', [item.caption]);
}
