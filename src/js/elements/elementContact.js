import { el } from 'redom';
import { getContactItem, getPhoneNumber } from '../utils';

function getContactHref(contact) {
  switch (contact.type.trim().toLowerCase()) {
    case 'tel':
      return `tel:${getPhoneNumber(contact.value)}`;
    case 'email':
      return `email:${contact.value}`;
    default:
      return contact.value;
  }
}

function getAdditionalClass(contact) {
  switch (contact.type.trim().toLowerCase()) {
    case 'tel':
      return 'contact--phone';
    case 'email':
      return 'contact--email';
    case 'link':
      return 'contact--link';
    default:
      return '';
  }
}

export default function elementContact(id, className) {
  const contact = getContactItem(id);
  const additionalClass = getAdditionalClass(contact);

  const link = el(
    'a.contact__value',
    {
      href: getContactHref(contact),
      target: contact.target,
    },
    contact.value
  );
  const text = el('.contact__text', contact.text);

  return el(`.contact.${additionalClass}.${className}`, [link, text]);
}
