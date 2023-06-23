import { el } from 'redom';
import { getProjectItem } from '../utils';

export default function elementProject(id) {
  const item = getProjectItem(id);
  if (!item) return;

  const image = el('img.project__img');
  image.setAttribute('src', item.photo);

  const project = el('.project', [image]);

  return project;
}
