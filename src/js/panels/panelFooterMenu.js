import { el, mount } from 'redom';
import { MENU_ITEMS } from '../constants';
import elementFooterMenuItem from '../elements/elementFooterMenuItem';

export default function panelFooterMenu() {
  const list = el('ul.footer__menu-list');

  MENU_ITEMS.forEach((value) => {
    const item = elementFooterMenuItem(value.id);
    mount(list, item);
  });

  return el('nav.footer__menu', [list]);
}
