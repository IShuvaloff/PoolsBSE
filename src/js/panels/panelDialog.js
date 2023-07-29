import { el, mount } from 'redom';
import { closeModal } from '../utils';
import Button from '../components/Button/button';

export default function panelDialog({
  title,
  titleSpecialPatterns = [], // ! массив объектов {from, to}, со стартовым и конечным индексами символов в title, которые следует выделить
  inputs = [], // ! массив объектов {id, placeholder} для создания инпутов
  btnText = '',
  className = '',
}) {
  const titleElement = el(`.dialog__title.${className}`);

  let newTitle = title;
  titleSpecialPatterns
    .sort((a, b) => a.from > b.from)
    .forEach((item) => {
      newTitle =
        newTitle.slice(0, item.from - 1) +
        '<span class="dialog__title--special">' +
        newTitle.slice(item.from - 1, item.to) +
        '</span>' +
        newTitle.slice(item.to, newTitle.length);
    });

  titleElement.innerHTML = newTitle;

  const content = el('.dialog__content');
  inputs.forEach((item) => {
    const input = el('input.dialog__input');
    input.id = `dialog-${item.id}`;
    input.placeholder = item.placeholder ?? '';
    input.type = 'text';

    mount(content, input);
  });

  const btn = new Button({
    classNames: ['btn', 'dialog__btn'],
    caption: btnText,
  });

  const dialog = el(`.dialog.${className}`, [titleElement, content, btn]);

  const container = el('.dialog-container#dialog-container', [dialog]);

  container.addEventListener('click', (e) => {
    // console.log('контейнер: ');
    // console.log(e.target);
    // console.log('текущий контейнер: ');
    // console.log(e.currentTarget);

    if (e.target === e.currentTarget) {
      closeModal();
    }
  });

  return container;
}
