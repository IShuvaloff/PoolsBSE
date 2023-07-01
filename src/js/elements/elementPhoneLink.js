import { el, mount } from 'redom';
import { getContactItem, getPhoneNumber, getSvgHtml } from '../utils';
import phoneImg from '../../assets/icons/contacts/phone.svg';

export default function elementPhoneLink(id) {
  const phone = getContactItem(id);

  const link = el('a.contact-phone', {
    href: `tel:${getPhoneNumber(phone.value)}`,
  });

  link.innerHTML = getSvgHtml(phoneImg);

  const text = el('span.contact-phone--text', phone.value);

  mount(link, text);

  return link;
}
