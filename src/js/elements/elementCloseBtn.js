import { el } from 'redom';
import closeIcon from '../../assets/icons/close-btn.svg';
import { getSvgHtml } from '../utils';

export default function elementCloseBtn(className) {
  const btn = el(`button.btn.btn__close.${className}__btn`, {
    id: `${className}-close-btn`,
  });
  btn.innerHTML = getSvgHtml(closeIcon);

  return btn;
}
