import { el } from 'redom';
import elementServices from '../elements/elementServices';
import { elementSubtitleServices } from '../elements/elementSubtitle';
import elementContainer from '../elements/elementContainer';

export default function panelMainServices() {
  const container = elementContainer([
    elementSubtitleServices('Наши услуги'),
    elementServices(),
  ]);
  container.classList.add('container--services');

  return el('.main__services', [container]);
}
