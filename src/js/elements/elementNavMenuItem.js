import { el } from 'redom';
import { getMenuItem } from '../utils';
import { openPage } from '../routing';

export default function elementNavMenuItem(id, showShortNames, className) {
  const item = getMenuItem(id);
  if (!item) return;

  const link = el(`li.menu-item.${className}__menu-item`, [
    showShortNames ? item.captionShort : item.caption,
  ]);

  // ? превращение обычного блока в фокусируемый линк, работающий по клику и нажатию пробела/энтера
  link.setAttribute('tabindex', '0');
  link.addEventListener('click', () => openPage(id));
  link.addEventListener('keydown', (e) => {
    if (['Enter', 'Space'].includes(e.code)) openPage(id);
  });

  return link;
}
