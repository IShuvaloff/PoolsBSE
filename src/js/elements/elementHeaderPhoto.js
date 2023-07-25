import photoMain from '../../assets/img/photo-main.jpg';
import { getMenuItem } from '../utils';
import elementPhoto from './elementPhoto';

function getPhoto(id) {
  return getMenuItem(id)?.photoMain || photoMain;
}

export default function elementHeaderPhoto(id) {
  const src = getPhoto(id);

  return elementPhoto(src, 'header');
}

export function updateHeaderPhoto(id) {
  const img = document.querySelector('.header__photo-img');
  img?.setAttribute('src', getPhoto(id));
}
