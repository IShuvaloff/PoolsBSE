import { el } from 'redom';

function getParam(id) {
  switch (id) {
    case 'length':
      return {
        name: 'length',
        caption: 'Длина бассейна',
        placeholder: 'например, 5 метров',
        type: 'number',
      };
    case 'depth':
      return {
        name: 'depth',
        caption: 'Глубина бассейна',
        placeholder: 'например, 1.5 метра',
        type: 'number',
      };
    case 'width':
      return {
        name: 'width',
        caption: 'Ширина бассейна',
        placeholder: 'например, 6 метров',
        type: 'number',
      };
    case 'city':
      return {
        name: 'city',
        caption: 'Город',
        placeholder: 'Москва, Уфа',
        type: 'text',
      };
    case 'phone':
      return {
        name: 'phone',
        caption: 'Номер телефона',
        placeholder: '+7 (911) 642-32-99',
        type: 'tel',
      };
    default:
      return undefined;
  }
}

export default function elementCalculateParam(id) {
  const param = getParam(id);

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
