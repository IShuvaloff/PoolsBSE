import { el } from 'redom';
import updatePageContent from './updatePage';

export default function createPageUnknown() {
  const text = el('p.dynamic-text', 'СТРАНИЦА НЕ НАЙДЕНА!');

  updatePageContent(text);
}
