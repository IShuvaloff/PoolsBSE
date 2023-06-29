import { el } from 'redom';

export default function panelSchedule() {
  const title = el('h3.contacts__subtitle.schedule__title', 'Режим работы');

  const days = el(
    'p.schedule__text.schedule__text--days',
    'Понедельник-Воскресенье'
  );
  const time = el('p.schedule__text.schedule__text--time', '9:00-21:00');
  const content = el('.schedule__info', [days, time]);

  return el('.schedule', [title, content]);
}
