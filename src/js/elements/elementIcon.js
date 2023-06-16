import { PAGE_ICONS } from '../constants';
import { el } from 'redom';
import { getSvgHtml } from '../utils';

export default function elementIcon(id) {
  const pageIcon = PAGE_ICONS.find((value) => value.id === id);
  if (!pageIcon) return;

  const icon = el('.header__icon.icon-bg');
  icon.innerHTML = getSvgHtml(pageIcon.svg);

  return icon;
}
