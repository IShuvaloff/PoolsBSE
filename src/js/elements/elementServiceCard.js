import { el } from 'redom';
import { getMenuItem } from '../utils';

export default function elementServiceCard(id, checked = false) {
  const item = getMenuItem(id);

  // const img = el('img.service__img');
  // img.setAttribute('src', item.photoServices);

  // <picture>
  //   <source srcset="img/offers/offer-1.webp" type="image/webp">
  //   <img src="img/offers/offer-1.jpg" alt="Картинка">
  // </picture>

  const title = el('.service__title', item.caption);

  const text = el('.service__text', item.descr);

  const btn = el('button.btn.service__btn', 'Подробнее');

  const card = el(`.service.service--${item.name}`, [title, text, btn]);
  card.tabIndex = '0';
  if (checked) {
    card.classList.add('service--checked');
  }

  return card;
}
