import { el } from 'redom';
import photoMain from '../../assets/img/photo-main.jpg';
import { getMenuItem } from '../utils';

function getPhoto(id) {
  return getMenuItem(id)?.photoMain || photoMain;
}

export default function elementHeaderPhoto(id) {
  const img = el('img.header__photo-img');
  img.setAttribute('src', getPhoto(id));

  return el('.header__photo', [img]);
}

export function updateHeaderPhoto(id) {
  const img = document.querySelector('.header__photo-img');
  img.setAttribute('src', getPhoto(id));
}
