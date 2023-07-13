import { el } from 'redom';
import { router } from '../routing';
import { REPONAME } from '../constants';
import { panelBurgerMenuClose } from '../panels/panelBurgerMenu';

function openPageMain() {
  panelBurgerMenuClose();
  router.navigate(`${REPONAME}`);
}

export default function elementLogo(className) {
  const logo = el(`.icon-logo.${className}__logo`, 'BSE');
  logo.addEventListener('click', openPageMain);

  return logo;
}
