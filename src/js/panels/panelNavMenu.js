import { el, mount } from 'redom';
import { MENU_ITEMS } from '../constants';
import elementNavMenuItem from '../elements/elementNavMenuItem';

export default function panelNavMenu(className, showShortNames = false) {
  const list = el(`ul.menu-list.${className}__menu-list`);

  MENU_ITEMS.forEach((value) => {
    const item = elementNavMenuItem(value.id, showShortNames, className);
    mount(list, item);
  });

  return el(`nav.${className}__menu`, [list]);
}
