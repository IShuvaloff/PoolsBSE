import elementHeaderBurger from '../elements/elementHeaderBurger';
import elementLogo from '../elements/elementLogo';
import elementPhoneLink from '../elements/elementPhoneLink';
import { el, mount } from 'redom';
import { CONTACTS } from '../constants';
import elementOrderCall from '../elements/elementOrderCall';
import panelSocials from './panelSocials';

export default function panelHeaderTop() {
  // бургер
  const burger = elementHeaderBurger();
  const logo = elementLogo('header');

  // соцсети
  const socials = panelSocials('header');

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
