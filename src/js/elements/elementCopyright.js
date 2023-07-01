import { el } from 'redom';

export default function elementCopyright(className) {
  return el(
    `p.copyright.${className}__copyright`,
    `BSE инженерно-технический центр ©${new Date().getFullYear()}. Все права защищены.`
  );
}
