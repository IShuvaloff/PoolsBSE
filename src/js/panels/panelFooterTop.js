import { el } from 'redom';
import panelFooterLogo from './panelFooterLogo';
import panelNavMenu from './panelNavMenu';
import panelFooterContacts from './panelFooterContacts';
import panelFooterPlaces from './panelFooterPlaces';

export default function panelFooterTop() {
  return el('.footer__top', [
    panelFooterLogo('footer'),
    panelNavMenu('footer'),
    panelFooterPlaces(),
    panelFooterContacts(),
  ]);
}
