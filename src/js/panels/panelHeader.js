import { el } from 'redom';
import elementContainer from '../elements/elementContainer';
import elementHeaderBackground from '../elements/elementHeaderBackground';
import elementIcon from '../elements/elementIcon';
import panelHeaderMain from './panelHeaderMain';
import panelHeaderTop from './panelHeaderTop';
import '../../sass/_header.sass';

export default function panelHeader() {
  const background = elementHeaderBackground();
  const container = elementContainer(
    [
      panelHeaderTop(),
      panelHeaderMain(),
      elementIcon('swimming-pool', 'header'),
    ],
    'header'
  );
  return el('header.header', [background, container]);
}
