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
