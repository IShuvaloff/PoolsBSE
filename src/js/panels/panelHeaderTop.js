import elementHeaderBurger from '../elements/elementHeaderBurger';
import elementLogo from '../elements/elementLogo';
import elementSocialLink from '../elements/elementSocialLink';
import elementPhoneLink from '../elements/elementPhoneLink';
import { el, mount } from 'redom';
import { CONTACTS } from '../constants';

export default function panelHeaderTop() {
  // бургер
  const burger = elementHeaderBurger();
  const logo = elementLogo();

  // соцсети
  const socials = el('.header__contacts--socials');
  CONTACTS.filter((item) => item.type === 'link').forEach((item) => {
    const link = elementSocialLink(item.id, 'header__contact');
    mount(socials, link);
  });

  // телефоны
  const phones = el('.header__contacts--phones', [
    elementPhoneLink('+7 (918) 910-65-55'),
    elementPhoneLink('+7 (978) 934-45-55'),
  ]);

  // заказ звонка
  const orderCall = el('button.btn.header__contacts--btn', 'Заказать звонок');

  const contacts = el('.header__contacts', [socials, phones, orderCall]);

  return el('.header__top', [burger, logo, contacts]);
}
