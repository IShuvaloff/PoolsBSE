import { el } from 'redom';
import { getSvgHtml } from '../utils';
import whatsapp from '../../assets/icons/contacts/whatsapp.svg';
import vk from '../../assets/icons/contacts/vk.svg';

function getSocial(id) {
  switch (id) {
    case 'whatsapp':
      return { name: 'WhatsApp', href: 'https://whatsapp.com', svg: whatsapp };
    case 'vk':
      return { name: 'vk', href: 'https://vk.com', svg: vk };
    default:
      return undefined;
  }
}

export default function elementSocialLink(id) {
  const social = getSocial(id);

  const link = el('a.contact-social.icon-bg', {
    href: social.href,
    target: '_blank',
  });
  link.innerHTML = getSvgHtml(social.svg);

  return link;
}
