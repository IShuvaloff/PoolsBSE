import { el } from 'redom';
import { getSvgHtml } from '../utils';
import checkIcon from '../../assets/icons/list-item-check.svg';

export default function elementListItemCheck(text, className) {
  if (!text.trim()) return;

  const icon = el('.item-check__icon');
  icon.innerHTML = getSvgHtml(checkIcon);
  const caption = el('.item-check__text', text.trim());

  return el(`li.item-check.${className}.${className}--item-check`, [
    icon,
    caption,
  ]);
}
