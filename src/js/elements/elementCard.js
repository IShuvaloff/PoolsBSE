import { el, mount } from 'redom';
import { getPoolType } from '../utils';
import elementListItemCheck from '../elements/elementListItemCheck';

export default function elementCard(id, className) {
  const card = getPoolType(id);
  if (!card) return;

  const photo = el('img.card__photo');
  photo.setAttribute('src', card.photo);
  const text = el('p.card__text', card.description);
  const textWrapper = el('.card__text-wrapper', [text]);
  const header = el('.card__header', [photo, textWrapper]);

  const title = el('h3.card__title', card.title);
  const list = el('ul.card__features');
  card.features.forEach((item) => {
    const point = elementListItemCheck(item, 'card__feature');
    mount(list, point);
  });
  const btn = el('button.btn.card__btn', 'Рассчитать стоимость');
  const content = el('.card__content', [title, list, btn]);

  return el(`.card.${className}__card`, [header, content]);
}
