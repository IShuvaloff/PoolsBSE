import { el, mount } from 'redom';
import elementCalculateParam from '../elements/elementCalculateParam';

const paramsNames = ['length', 'depth', 'width', 'city', 'phone'];

export default function elementCalculateParams() {
  const params = el('.calculate__params');
  paramsNames.forEach((value) => {
    const param = elementCalculateParam(value);
    mount(params, param);
  });

  const btn = el('button.btn.calculate__btn', 'Рассчитать стоимость');

  return el('.header__calculate calculate', [params, btn]);
}
