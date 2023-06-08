// import { router } from '../routing';
import updatePageContent from './updatePage';
import elementHeaderBackground from '../elements/elementHeaderBackground';
import elementContainer from '../elements/elementContainer';
import panelHeaderTop from '../panels/panelHeaderTop';
import panelHeaderMain from '../panels/panelHeaderMain';
import { el } from 'redom';

export default function createPageMain() {
  // const btn = el('button.btn-unknown', 'НАЖМИ МЕНЯ');
  // btn.addEventListener('click', () => {
  //   router.navigate('/abcdefg');
  // });
  const background = elementHeaderBackground();
  const container = elementContainer([panelHeaderTop(), panelHeaderMain()]);

  const page = el('header.header', [background, container]);

  updatePageContent(page);
}
