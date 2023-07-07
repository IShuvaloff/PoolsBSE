import { el, mount } from 'redom';
import { CONTACTS } from '../constants';
import elementSocialLink from '../elements/elementSocialLink';

export default function panelSocials(className) {
  const socials = el(`.socials.${className}__contacts--socials`);
  CONTACTS.filter((item) => item.type === 'link').forEach((item) => {
    const link = elementSocialLink(item.id, `${className}__contact`);
    mount(socials, link);
  });

  return socials;
}
