// import error from '../assets/icons/error.png';
// import success from '../assets/icons/success.png';
import { mount, el, setChildren } from 'redom';
import imgInfo from '../assets/icons/notifications/message-info.svg';
import imgError from '../assets/icons/notifications/message-error.svg';
import imgSuccess from '../assets/icons/notifications/message-success.svg';
import imgWarning from '../assets/icons/notifications/message-warning.svg';

// ! список уведомлений
function createNotificationsList() {
  const list = el('ul.notifications');
  mount(document.body, list);
  return list;
}

function getNotificationImage(type) {
  switch (type) {
    case 'info':
      return imgInfo;
    case 'error':
      return imgError;
    case 'success':
      return imgSuccess;
    case 'warning':
      return imgWarning;
    default:
      return undefined;
  }
}

export function showNotification(text, type) {
  const list =
    document.querySelector('.notifications') ?? createNotificationsList();

  const item = el(`li.notifications__item.${type}`);

  const svg = getNotificationImage(type);
  const image = el(`div.notifications__img`);
  image.innerHTML = `
    <svg viewBox="${svg.viewBox}">
      <use xlink:href="#${svg.id}" />
    </svg>`;

  const textBlock = el('p.notifications__text', text);

  const btnClose = el('button.notifications__btn');
  btnClose.addEventListener('click', () => item.remove());

  setChildren(item, [image, textBlock, btnClose]);
  mount(list, item);

  setTimeout(() => item.remove(), 45000);
}
