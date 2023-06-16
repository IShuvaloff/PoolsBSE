import { el } from 'redom';

export default function elementTitlePrimary(title) {
  return el('h1.header__title', title.trim());
}
