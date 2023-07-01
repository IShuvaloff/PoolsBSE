import { el, mount } from 'redom';
import elementPhoneLink from '../elements/elementPhoneLink';
import { CONTACTS } from '../constants';
import elementOrderCall from '../elements/elementOrderCall';

export default function panelFooterContacts() {
  const phones = el('.phones.footer__contacts--phones');
  CONTACTS.filter((item) => item.showInPhones).forEach((item) => {
    mount(phones, elementPhoneLink(item.id));
  });

  const btn = elementOrderCall('.footer__contacts');

  return el('.footer__contacts', [phones, btn]);
}
