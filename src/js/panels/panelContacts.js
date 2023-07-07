import { el, mount } from 'redom';
import { CONTACTS } from '../constants';
import elementContact from '../elements/elementContact';
import panelSocials from './panelSocials';

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
  const socials = panelSocials('contacts');

  return el('.contacts__links.links', [linksTitle, phones, socials]);
}
