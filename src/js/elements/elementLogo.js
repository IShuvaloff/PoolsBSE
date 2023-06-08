import { el } from 'redom';
import { router } from '../routing';

function openPageMain() {
  router.navigate('/');
}

export default function elementLogo() {
  const logo = el('.header__logo.icon-logo', 'BSE');
  logo.addEventListener('click', openPageMain);

  return logo;
}
