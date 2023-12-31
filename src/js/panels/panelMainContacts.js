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
  const schedule = panelSchedule('contacts');
  const scheduleWrapper = el('.schedule-wrapper', [
    el('h3.contacts__subtitle.schedule__title', 'Режим работы'),
    schedule,
  ]);
  const contacts = el('.contacts__wrapper', [links, scheduleWrapper]);

  const map = elementMap();

  const icon = elementIcon('street-pool', 'contacts');

  const content = el('.contacts__content', [contacts, map, icon]);

  const container = elementContainer([title, content], 'contacts');
  container.classList.add('contacts');

  return container;
}
