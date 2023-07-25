import {
  PAGES,
  DOCTITLE,
  FEATURES,
  PROJECTS,
  SWIPERS,
  REPONAME,
  PARAMS,
  CONTACTS,
} from './constants';
import { MENU_ITEMS } from './constants';

// добавление к имени страницы исходного репозитория проекта
export function getPagePath(page) {
  return `/${REPONAME}/${page.trim()}`;
}

export function getMenuItem(id) {
  return MENU_ITEMS.find((value) => value.id === id);
}

export function getFeatureItem(id) {
  return FEATURES.find((item) => item.id === id);
}

export function getProjectItem(id) {
  return PROJECTS.find((item) => item.id === id);
}

export function getSwiperItem(id) {
  return SWIPERS.find((item) => item.id === id);
}

export function getParamItem(id) {
  return PARAMS.find((item) => item.id === id);
}

export function getContactItem(id) {
  return CONTACTS.find((item) => item.id === id);
}

// поиск данных страницы по имени
export function getPageByName(name) {
  return PAGES.find((page) => page.name === name);
}

// обновить заголовок сайта
export function updateDocumentTitle(pageName) {
  const pageTitle = getPageByName(pageName)?.title;
  document.title = `${DOCTITLE} - ${pageTitle ?? 'Страница не найдена'}`;
}

// сформировать инлайновый SVG из спрайта
export function getSvgHtml(svg) {
  if (!svg?.id?.trim()) return '';

  return `
    <svg viewBox="${svg.viewBox}">
      <use xlink:href="#${svg.id}" />
    </svg>`;
}

// визуальный формат телефонного номера
export function getPhoneNumber(phone) {
  let onlyNums = phone.replace(/\D/g, '');
  return `+${onlyNums}`;
}

// проверка на нечетное число
export function isOdd(num) {
  return num % 2;
}

// произвести чтение и сохранение величины экрана
export function saveWindowSize() {
  sessionStorage.setItem('screenWidth', window.innerWidth);
  sessionStorage.setItem('screenHeight', window.innerHeight);
}
export function getWindowSize() {
  return {
    width: sessionStorage.getItem('screenWidth'),
    height: sessionStorage.getItem('screenHeight'),
  };
}

// включить/отключить прокрутку страницы
export function setPageScrollingOff() {
  document.getElementById('app').classList.add('not-scrolling');
}
export function setPageScrollingOn() {
  document.getElementById('app').classList.remove('not-scrolling');
}

// модальное окно
export function showModal() {
  document
    .getElementById('dialog-container')
    .classList.add('dialog-container--visible');

  // ? отключить скролл страницы
  setPageScrollingOff();
}

export function closeModal() {
  document
    .getElementById('dialog-container')
    .classList.remove('dialog-container--visible');

  // ? включить скролл страницы (ЕСЛИ НЕ ОТКРЫТО БУРГЕР-МЕНЮ)
  const menu = document.querySelector('.burger-menu--visible');
  if (!menu) {
    setPageScrollingOn();
  }
}
