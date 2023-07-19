import { el } from 'redom';
import { showModal } from '../utils';

export default function elementOrderCall(className) {
  const btn = el(
    `button.btn.btn-call-order.${className}--btn`,
    'Заказать звонок'
  );

  btn.addEventListener('click', showModal);

  return btn;
}
