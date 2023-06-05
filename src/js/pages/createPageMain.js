import { el, setChildren } from 'redom';
import { router } from '../routing';
import updatePageContent from './updatePage';

export default function createPageMain() {
  const text = el('p.dynamic-text', 'Проект собран на Webpack');

  const btn = el('button.btn-unknown', 'НАЖМИ МЕНЯ');
  btn.addEventListener('click', () => {
    router.navigate('/abcdefg');
  });

  const wrapper = el('.main-wrapper');

  setChildren(wrapper, [text, btn]);

  updatePageContent(wrapper);
}
