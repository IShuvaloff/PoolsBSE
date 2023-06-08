import { PAGES, DOCTITLE } from './constants';

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
