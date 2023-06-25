import { el } from 'redom';

export default function elementPhoto(src, className) {
  const img = el(`img.photo-img.${className}__photo-img`);
  img.setAttribute('src', src);

  return el(`.photo.${className}__photo`, [img]);
}
