import elementHeaderBurger from '../elements/elementHeaderBurger';
import elementLogo from '../elements/elementLogo';
import elementSocialLink from '../elements/elementSocialLink';
import elementPhoneLink from '../elements/elementPhoneLink';
import { el, mount } from 'redom';
import { CONTACTS } from '../constants';
import elementOrderCall from '../elements/elementOrderCall';

export default function panelHeaderTop() {
  // бургер
  const burger = elementHeaderBurger();
  const logo = elementLogo('header');

  // соцсети
  const socials = el('.header__contacts--socials');
  CONTACTS.filter((item) => item.type === 'link').forEach((item) => {
    const link = elementSocialLink(item.id, 'header__contact');
    mount(socials, link);
  });

  // телефоны
  const phones = el('.phones.header__contacts--phones');
  CONTACTS.filter((item) => item.showInPhones).forEach((item) => {
    mount(phones, elementPhoneLink(item.id));
  });

  // заказ звонка
  const orderCall = elementOrderCall('header__contacts');

  const contacts = el('.header__contacts', [socials, phones, orderCall]);

  return el('.header__top', [burger, logo, contacts]);
}
