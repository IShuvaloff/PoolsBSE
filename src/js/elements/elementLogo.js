import { el } from 'redom';
import { router } from '../routing';
import { panelBurgerMenuClose } from '../panels/panelBurgerMenu';

function openPageMain() {
  panelBurgerMenuClose();
  router.navigate('/');
}

export default function elementLogo(className) {
  const logo = el(`.icon-logo.${className}__logo`, 'BSE');
  logo.addEventListener('click', openPageMain);

  return logo;
}
