import { el } from 'redom';
import burger from '../../assets/icons/menu-burger.svg';
import { getSvgHtml } from '../utils';

export default function elementHeaderBurger() {
  const link = el('button.header__burger', {
    id: 'burger',
  });
  link.innerHTML = getSvgHtml(burger);

  return link;
}
