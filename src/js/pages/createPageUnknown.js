import { el } from 'redom';
import updatePageContent from './updatePage';

export default function createPageUnknown() {
  const text = el('p.dynamic-text', 'СТРАНИЦА НЕ НАЙДЕНА!');
  const container = el('.container', [text]);
  const main = el('main.main.main--unknown', [container]);

  updatePageContent(main);
}
