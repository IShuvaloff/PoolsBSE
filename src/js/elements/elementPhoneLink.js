import { el, mount } from 'redom';
import { getPhoneNumber, getSvgHtml } from '../utils';
import phoneImg from '../../assets/icons/contacts/phone.svg';

export default function elementPhoneLink(phone) {
  const link = el('a.contact-phone', {
    href: `tel:${getPhoneNumber(phone)}`,
  });

  link.innerHTML = getSvgHtml(phoneImg);

  const text = el('span.contact-phone--text', phone);

  mount(link, text);

  return link;
}
