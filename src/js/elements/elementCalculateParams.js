import { el, mount } from 'redom';
import elementCalculateParam from '../elements/elementCalculateParam';
import { PARAMS } from '../constants';

export default function elementCalculateParams() {
  const params = el('.calculate__params');
  PARAMS.forEach((value) => {
    const param = elementCalculateParam(value.id);
    mount(params, param);
  });

  const btn = el('button.btn.calculate__btn', 'Рассчитать стоимость');

  return el('.header__calculate calculate', [params, btn]);
}
