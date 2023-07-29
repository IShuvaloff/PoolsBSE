import { el, mount } from 'redom';
import elementCalculateParam from '../elements/elementCalculateParam';
import { PARAMS } from '../constants';
import Button from '../components/Button/button';

export default function elementCalculateParams() {
  const params = el('.calculate__params');
  PARAMS.forEach((value) => {
    const param = elementCalculateParam(value.id);
    mount(params, param);
  });

  const btn = new Button({
    classNames: ['btn', 'calculate__btn'],
    caption: 'Рассчитать стоимость',
  });

  return el('form.header__calculate calculate', [params, btn]);
}
