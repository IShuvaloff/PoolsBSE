import { el } from 'redom';

export default function elementContainer(elements, className) {
  return el(`.container.container--${className}`, elements);
}
