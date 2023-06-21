import { PAGES, DOCTITLE, FEATURES } from './constants';
import { MENU_ITEMS } from './constants';

export function getMenuItem(id) {
  return MENU_ITEMS.find((value) => value.id === id);
}

export function getFeatureItem(id) {
  return FEATURES.find((item) => item.id === id);
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
