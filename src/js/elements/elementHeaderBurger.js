import { el } from 'redom';
import burger from '../../assets/icons/menu-burger.svg';
import { getSvgHtml } from '../utils';

function openBurgerMenu(e) {
  e.preventDefault();

  const burgerMenuContainer = document.querySelector('.burger-menu-container');
  const burgerMenu = document.querySelector('.burger-menu');
  if (!burgerMenuContainer || !burgerMenu) return;

  burgerMenuContainer.classList.add('burger-menu-container--visible');
  burgerMenu.classList.add('burger-menu--visible');

  // TODO! отключить скролл страницы
}

export default function elementHeaderBurger() {
  const link = el('button.header__burger', {
    id: 'burger',
  });
  link.innerHTML = getSvgHtml(burger);

  link.addEventListener('click', openBurgerMenu);

  return link;
}
