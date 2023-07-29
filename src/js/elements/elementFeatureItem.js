import { el, mount } from 'redom';
import { getFeatureItem, getSvgHtml } from '../utils';

export default function elementFeatureItem(id, drawRightUpDot = false) {
  const item = getFeatureItem(id);
  if (!item) return;

  const svg = getSvgHtml(item.svg);
  const icon = el('.feature__icon');
  icon.innerHTML = svg;
  const title = el('.feature__title', item.title);
  const text = el('.feature__descr', item.descr);
  const info = el('.feature__info', [title, text]);

  const card = el('.feature', [icon, info]);

  if (drawRightUpDot) {
    const dot = el('.feature__border-right-up-dot');
    mount(card, dot);
  }

  return card;
}
