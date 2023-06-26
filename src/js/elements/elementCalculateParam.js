import { el } from 'redom';
import { getParamItem } from '../utils';

export default function elementCalculateParam(id) {
  const param = getParamItem(id);

  const label = el('label.calculate__label', param.caption);
  label.setAttribute('for', `calculate-${param.name}`);

  const input = el(`input.calculate__input#calculate-${param.name}`);
  input.placeholder = param.placeholder;
  input.type = param.type;

  return el(`.calculate__param.calculate__param--${param.name}`, [
    label,
    input,
  ]);
}
