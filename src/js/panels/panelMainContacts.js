import { elementSubtitleLeft } from '../elements/elementSubtitle';
import elementContainer from '../elements/elementContainer';
import panelContacts from './panelContacts';
import panelSchedule from './panelSchedule';
import elementMap from '../elements/elementMap';
import { el } from 'redom';
import elementIcon from '../elements/elementIcon';

export default function panelMainContacts() {
  const title = elementSubtitleLeft('Наши контакты');
  title.classList.add('contacts__title');

  const links = panelContacts();
  const schedule = panelSchedule();
  const contacts = el('.contacts__wrapper', [links, schedule]);

  const map = elementMap();

  const content = el('.contacts__content', [contacts, map]);

  const icon = elementIcon('street-pool', 'contacts');

  const container = elementContainer([title, content, icon], 'contacts');
  container.classList.add('contacts');

  return container;
}
