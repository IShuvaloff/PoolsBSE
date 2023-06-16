import { el } from 'redom';
import photoMain from '../../assets/img/photo-main.jpg';
import { MENU_ITEMS } from '../constants';

function getPhoto(id) {
  return MENU_ITEMS.find((value) => value.id === id)?.photoMain || photoMain;
}

export default function elementHeaderPhoto(id) {
  const img = el('img.header__photo-img');
  img.setAttribute('src', getPhoto(id));
  console.log(img);

  return el('.header__photo', [img]);
}

export function updateHeaderPhoto(id) {
  const img = document.querySelector('.header__photo-img');
  img.setAttribute('src', getPhoto(id));
}
