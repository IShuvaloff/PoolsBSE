import { el } from 'redom';
import elementCloseBtn from '../elements/elementCloseBtn';
import elementLogo from '../elements/elementLogo';
import elementOrderCall from '../elements/elementOrderCall';
import panelNavMenu from './panelNavMenu';
import panelSocials from './panelSocials';

const CLASS_NAME = 'burger-menu';

export function panelBurgerMenuClose() {
  document
    .querySelector(`.${CLASS_NAME}-container`)
    ?.classList?.remove(`${CLASS_NAME}-container--visible`);
  document
    .querySelector(`.${CLASS_NAME}`)
    ?.classList?.remove(`${CLASS_NAME}--visible`);

  // TODO! включить скролл страницы
}

export default function panelBurgerMenu() {
  const closeBtn = elementCloseBtn(CLASS_NAME);
  closeBtn.addEventListener('click', panelBurgerMenuClose);

  const container = el(`.${CLASS_NAME}-container`, [
    el(`.${CLASS_NAME}`, [
      closeBtn,
      elementLogo(CLASS_NAME),
      panelNavMenu(CLASS_NAME, true),
      panelSocials(CLASS_NAME),
      elementOrderCall(CLASS_NAME),
    ]),
  ]);

  container.addEventListener('click', (e) => {
    // console.log('контейнер: ');
    // console.log(e.target);
    // console.log('текущий контейнер: ');
    // console.log(e.currentTarget);
    e.preventDefault();
    if (e.target === e.currentTarget) {
      panelBurgerMenuClose();
    }
  });

  return container;
}
