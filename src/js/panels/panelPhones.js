import { el, mount } from 'redom';
import { CONTACTS } from '../constants';
import elementPhoneLink from '../elements/elementPhoneLink';

export default function panelPhones(className) {
  const phones = el(`.phones.${className}__phones`);
  CONTACTS.filter((item) => item.showInPhones).forEach((item) => {
    mount(phones, elementPhoneLink(item.id, className));
  });

  return phones;
}
