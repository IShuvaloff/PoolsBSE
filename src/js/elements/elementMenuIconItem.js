import { el, mount } from 'redom';
import { MENU_ITEMS } from '../constants';
import { getSvgHtml } from '../utils';
import { updateHeaderPhoto } from './elementHeaderPhoto';

function updateHeaderMenuSelected(el) {
  const classSelected = 'menu__item-icon--border-selected';
  document.querySelectorAll('.menu__item-icon--border').forEach((item) => {
    item.classList.remove(classSelected);
  });
  el.classList.add(classSelected);
}

function updateHeaderTitleSelected(id) {
  const title = document.querySelector('.header__title');
  const text = `Предлагаем для вас<br>${
    MENU_ITEMS.find((value) => value.id === id)?.caption
  }`;
  title.innerHTML = text;
}

function menuIconClicked() {
  // TODO! либо сделать переход на новую страницу, т.е. перерисовать целиком страницу и выставить фокус на нужном меню, либо обновить страницу по частям

  updateHeaderMenuSelected(this);
  updateHeaderPhoto(this.id);
  updateHeaderTitleSelected(this.id);
}

export default function elementMenuIconItem(id) {
  const item = MENU_ITEMS.find((value) => value.id === id);
  if (!item) return;

  // ? иконка с возможностью выделения
  const itemIcon = el(`.menu__item-icon.icon-bg.icon-${item.name}`);
  itemIcon.innerHTML = getSvgHtml(item.svg);

  const itemIconBorder = el(`.menu__item-icon--border#${id}`);
  itemIconBorder.tabIndex = '0';
  itemIconBorder.addEventListener('click', menuIconClicked);

  mount(itemIcon, itemIconBorder);

  // ? подпись
  const itemText = el('div', item.caption);

  // ? итоговый компонент
  return el('.menu__item', [itemIcon, itemText]);
}
