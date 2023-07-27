import { el, mount } from 'redom';
import { POOL_TYPES } from '../constants';
import elementCard from '../elements/elementCard';
import elementContainer from '../elements/elementContainer';

const CLASSNAME = 'pool-types';

export default function panelPoolsTypes() {
  const title = el(
    `.subtitle.${CLASSNAME}__title`,
    'Типы возводимых бассейнов любой сложности'
  );

  const list = el(`.${CLASSNAME}__list`);
  POOL_TYPES.map((item) => item.id).forEach((item) => {
    const point = elementCard(item, CLASSNAME);
    mount(list, point);
  });

  const container = elementContainer([title, list], CLASSNAME);
  container.classList.add(CLASSNAME);

  return container;
}
