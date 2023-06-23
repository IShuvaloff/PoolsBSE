import { el, mount } from 'redom';
import { FEATURES } from '../constants';
import elementFeatureItem from './elementFeatureItem';
import { isOdd } from '../utils';

export default function elementFeaturesGrid() {
  const list = el('.features-grid');
  let i = 0;
  FEATURES.forEach((item) => {
    i++;
    const drawRightUpDot = i > 1 && isOdd(i);
    const feature = elementFeatureItem(item.id, drawRightUpDot);
    feature.classList.add('features-grid__item');
    mount(list, feature);
  });

  return list;
}
