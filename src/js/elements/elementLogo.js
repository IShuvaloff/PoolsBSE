import { el } from 'redom';
import { openPage } from '../routing';
import { panelBurgerMenuClose } from '../panels/panelBurgerMenu';

function openPageMain() {
  panelBurgerMenuClose();
  openPage('main');
}

export default function elementLogo(className) {
  const logo = el(`.icon-logo.${className}__logo`, 'BSE');
  logo.addEventListener('click', openPageMain);

  return logo;
}
