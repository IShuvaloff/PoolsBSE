// import { el } from 'redom';
import { showModal } from '../utils';
import Button from '../components/Button/button';

export default function elementOrderCall(className) {
  return new Button({
    caption: 'Заказать звонок',
    type: 'button',
    classNames: ['btn', 'btn-call-order', `${className}--btn`],
    callbackClick: showModal,
  });
}
