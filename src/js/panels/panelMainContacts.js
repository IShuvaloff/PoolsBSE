import { elementSubtitleLeft } from '../elements/elementSubtitle';
import elementContainer from '../elements/elementContainer';
import panelContacts from './panelContacts';
import panelSchedule from './panelSchedule';
import elementMap from '../elements/elementMap';
import { el } from 'redom';

export default function panelMainContacts() {
  const title = elementSubtitleLeft('Наши контакты');
  title.classList.add('contacts__title');

  const links = panelContacts();
  const schedule = panelSchedule();
  const contacts = el('.contacts__wrapper', [links, schedule]);

  const map = elementMap();

  const content = el('.contacts__content', [contacts, map]);

  const container = elementContainer([title, content], 'contacts');
  container.classList.add('contacts');

  return container;
}
