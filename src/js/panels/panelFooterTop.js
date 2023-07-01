import { el } from 'redom';
import panelFooterLogo from './panelFooterLogo';
import panelFooterMenu from './panelFooterMenu';
import panelFooterContacts from './panelFooterContacts';
import panelFooterPlaces from './panelFooterPlaces';

export default function panelFooterTop() {
  return el('.footer__top', [
    panelFooterLogo('footer'),
    panelFooterMenu(),
    panelFooterPlaces(),
    panelFooterContacts(),
  ]);
}
