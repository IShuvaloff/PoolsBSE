// import { router } from '../routing';
import updatePageContent from './updatePage';
import elementHeaderBackground from '../elements/elementHeaderBackground';
import elementContainer from '../elements/elementContainer';
import elementIcon from '../elements/elementIcon';
import { elementSubtitleServices } from '../elements/elementSubtitle';
import elementServices /*, { runElementServicesFunctions, }*/ from '../elements/elementServices';
import panelHeaderTop from '../panels/panelHeaderTop';
import panelHeaderMain from '../panels/panelHeaderMain';
import { el } from 'redom';

export default function createPageMain() {
  // const btn = el('button.btn-unknown', 'НАЖМИ МЕНЯ');
  // btn.addEventListener('click', () => {
  //   router.navigate('/abcdefg');
  // });
  // ? шапка
  const background = elementHeaderBackground();
  const container = elementContainer([
    panelHeaderTop(),
    panelHeaderMain(),
    elementIcon('swimming-pool'),
  ]);
  const header = el('header.header', [background, container]);

  // ? тело
  const containerMain = elementContainer([
    elementSubtitleServices('Наши услуги'),
    elementServices(),
  ]);
  containerMain.classList.add('container--services');
  const main = el('main.main', [containerMain]);

  const page = el('.page', [header, main]);

  updatePageContent(page);
  // runElementServicesFunctions();
}
