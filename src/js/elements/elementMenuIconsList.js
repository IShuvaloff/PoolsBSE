import { el, mount } from 'redom';
import elementMenuIconItem from './elementMenuIconItem';
import { MENU_ITEMS } from '../constants';

export default function elementMenuIconsList() {
  const list = el('ul.menu');

  MENU_ITEMS.forEach((value) => {
    if (value.onlyNavList) return;
    const item = elementMenuIconItem(value.id);
    mount(list, item);
  });

  return el('nav.header__menu', [list]);
}
