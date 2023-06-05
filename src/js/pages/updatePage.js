import { setChildren } from 'redom';
import clearPage from './clearPage';

export default function updatePageContent(newPage) {
  clearPage();
  setChildren(document.getElementById('app'), newPage);
}
