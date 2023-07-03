import elementServices from '../elements/elementServices';
import { elementSubtitleServices } from '../elements/elementSubtitle';
import elementContainer from '../elements/elementContainer';
import { el } from 'redom';

export default function panelMainServices() {
  const containerTitle = elementContainer([
    elementSubtitleServices('Наши услуги'),
  ]);
  const containerPhotos = elementContainer([elementServices()], 'services');
  containerPhotos.classList.add('services');

  return el('.services-wrapper', [containerTitle, containerPhotos]);
}
