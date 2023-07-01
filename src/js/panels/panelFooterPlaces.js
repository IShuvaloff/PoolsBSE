import { el, mount } from 'redom';
import { CONTACTS } from '../constants';
import panelSchedule from './panelSchedule';

export default function panelFooterPlaces() {
  const towns = el('.footer__towns');
  CONTACTS.filter((item) => item.type === 'tel' && item.text).forEach(
    (item) => {
      const place = el('.footer__town', item.text);
      mount(towns, place);
    }
  );

  const schedule = panelSchedule('footer');

  return el('.footer__places', [towns, schedule]);
}
