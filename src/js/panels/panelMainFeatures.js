import { el } from 'redom';
import { elementSubtitleLight } from '../elements/elementSubtitle';
import elementFeaturesGrid from '../elements/elementFeaturesGrid';

export default function panelMainFeatures() {
  const gradient = el('.gradient.gradient-bg.main__features-gradient');
  const title = elementSubtitleLight('Уже более 13 лет мы обеспечиваем:');
  title.classList.add('main__features-title', 'features__title');
  const container = el('.container.container--features', [
    elementFeaturesGrid(),
  ]);

  return el('.main__features', [gradient, title, container]);
}
