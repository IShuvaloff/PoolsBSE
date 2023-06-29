import { el } from 'redom';
import { getContactItem, getSvgHtml } from '../utils';

export default function elementSocialLink(id, className) {
  const social = getContactItem(id);

  const link = el('a.contact-social.icon-bg', {
    href: social.value,
    target: social.target,
  });
  link.classList.add(className);
  link.innerHTML = getSvgHtml(social.svg);

  return link;
}
