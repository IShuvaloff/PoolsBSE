import { el } from 'redom';

export default function elementTextBlock(text, className) {
  return el(`p.text.${className}__text`, text.trim());
}
