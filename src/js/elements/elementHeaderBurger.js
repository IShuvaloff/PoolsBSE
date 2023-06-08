import { el } from 'redom';
import burger from '../../assets/icons/menu-burger.svg';

export default function elementHeaderBurger() {
  const link = el('button.header__burger', {
    id: 'burger',
  });
  link.innerHTML = `
    <svg viewBox="${burger.viewBox}">
      <use xlink:href="#${burger.id}" />
    </svg>`;

  return link;
}
