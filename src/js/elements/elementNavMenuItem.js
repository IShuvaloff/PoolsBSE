import { el } from 'redom';
import { getMenuItem } from '../utils';

export default function elementNavMenuItem(id, showShortNames, className) {
  const item = getMenuItem(id);
  if (!item) return;

  const link = el(
    'a.menu-item__link',
    showShortNames ? item.captionShort : item.caption
  );
  link.setAttribute('href', `/${id === 'main' ? '' : id}`); // не создавать отдельную страницу /main, а идти на главную
  link.setAttribute('data-navigo', '');

  return el(`li.menu-item.${className}__menu-item`, [link]);
}
