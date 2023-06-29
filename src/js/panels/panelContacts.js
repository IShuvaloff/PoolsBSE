import { el, mount } from 'redom';
import { CONTACTS } from '../constants';
import elementContact from '../elements/elementContact';
import elementSocialLink from '../elements/elementSocialLink';

export default function panelContacts() {
  const linksTitle = el(
    'h3.contacts__subtitle.links__title',
    'Соц-сети и телефон'
  );
  let link;
  // ? телефоны
  const phones = el('.contacts__phones');
  CONTACTS.filter((item) => item.type === 'tel').forEach((item) => {
    link = elementContact(item.id, 'contacts__phone');
    mount(phones, link);
  });
  // ? соцсети
  const socials = el('.contacts__socials');
  CONTACTS.filter((item) => item.type === 'link').forEach((item) => {
    const link = elementSocialLink(item.id, 'contacts__social');
    mount(socials, link);
  });

  return el('.contacts__links.links', [linksTitle, phones, socials]);
}
