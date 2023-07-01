import { el, mount } from 'redom';
import { CONTACTS } from '../constants';
import elementLogo from '../elements/elementLogo';
import elementSocialLink from '../elements/elementSocialLink';

export default function panelFooterLogo() {
  const logo = elementLogo('footer');

  const socials = el('.footer__socials');
  CONTACTS.filter((item) => item.type === 'link').forEach((item) => {
    const link = elementSocialLink(item.id, 'footer__social');
    mount(socials, link);
  });

  return el('.footer__logo-wrapper', [logo, socials]);
}
