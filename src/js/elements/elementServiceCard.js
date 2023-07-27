import { el } from 'redom';
import { getMenuItem } from '../utils';
import { openPage } from '../routing';

function clickServiceInfo() {
  console.log(this);
  openPage(this.dataset.serviceId);
}

export default function elementServiceCard(id, checked = false) {
  const item = getMenuItem(id);
  if (!item) return;

  // const img = el('img.service__img');
  // img.setAttribute('src', item.photoServices);

  // <picture>
  //   <source srcset="img/offers/offer-1.webp" type="image/webp">
  //   <img src="img/offers/offer-1.jpg" alt="Картинка">
  // </picture>

  const title = el('.service__title', item.caption);

  const text = el('.service__text', item.descr);

  const btn = el(
    `button.btn.service__btn.service__btn--${item.id}`,
    'Подробнее'
  );
  btn.dataset.serviceId = item.id;
  btn.addEventListener('click', clickServiceInfo);

  const card = el(`.service.service--${item.name}`, [title, text, btn]);
  card.tabIndex = '0';
  if (checked) {
    card.classList.add('service--checked');
  }

  return card;
}
