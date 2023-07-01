import { el } from 'redom';

export default function elementOrderCall(className) {
  return el(`button.btn.btn-call-order.${className}--btn`, 'Заказать звонок');
}
