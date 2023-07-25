import { el, mount } from 'redom';
import { getMenuItem, getSvgHtml } from '../utils';
import { updateHeaderPhoto } from './elementHeaderPhoto';
import { openPage } from '../routing';

export function updateHeaderMenu(pageName) {
  const menuItem = document.getElementById(pageName);
  if (!menuItem) return;

  updateHeaderMenuSelected(menuItem);
  updateHeaderPhoto(pageName);
  updateHeaderTitleSelected(pageName);
}

function updateHeaderMenuSelected(el) {
  const classSelected = 'menu__item-icon--border-selected';
  document.querySelectorAll('.menu__item-icon--border').forEach((item) => {
    item.classList.remove(classSelected);
  });
  el.classList.add(classSelected);
}

function updateHeaderTitleSelected(id) {
  const title = document.querySelector('.header__title');
  if (!title) return;
  const text = `Предлагаем для вас<br>${getMenuItem(id)?.caption}`;
  title.innerHTML = text;
}

function menuIconClicked() {
  // ? либо сделать переход на новую страницу, т.е. перерисовать целиком страницу и выставить фокус на нужном меню:
  openPage(this.id);

  // ? либо обновить страницу по частям
  // updateHeaderMenuSelected(this);
  // updateHeaderPhoto(this.id);
  // updateHeaderTitleSelected(this.id);
}

export default function elementMenuIconItem(id) {
  const item = getMenuItem(id);
  if (!item) return;

  // console.log(router.getCurrentLocation());

  // ? иконка с возможностью выделения
  const itemIcon = el(`.menu__item-icon.icon-bg.icon-${item.name}`);
  if (!itemIcon) return;
  itemIcon.innerHTML = getSvgHtml(item.svg);

  const itemIconBorder = el(`.menu__item-icon--border#${id}`);
  itemIconBorder.tabIndex = '0';
  itemIconBorder.addEventListener('click', menuIconClicked);

  mount(itemIcon, itemIconBorder);

  // ? подпись
  const itemText = el('div', item.caption);

  // ? итоговый компонент
  return el('li.menu__item', [itemIcon, itemText]);
}
