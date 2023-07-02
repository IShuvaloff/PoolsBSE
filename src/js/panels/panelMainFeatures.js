import { el } from 'redom';
import { elementSubtitleLight } from '../elements/elementSubtitle';
import elementFeaturesGrid from '../elements/elementFeaturesGrid';

export default function panelMainFeatures() {
  const gradient = el('.gradient.gradient-bg.features__gradient');

  const title = elementSubtitleLight('Уже более 13 лет мы обеспечиваем:');
  title.classList.add('main__features-title', 'features__title');

  const grid = elementFeaturesGrid();
  grid.classList.add('features__grid');

  const container = el('.container.container--features', [title, grid]);

  return el('.main__features.features', [gradient, container]);
}
