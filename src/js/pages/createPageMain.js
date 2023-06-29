// import { router } from '../routing';
// import { getPagePath } from '../utils';
import updatePageContent from './updatePage';
import elementHeaderBackground from '../elements/elementHeaderBackground';
import elementContainer from '../elements/elementContainer';
import elementIcon from '../elements/elementIcon';
import panelHeaderTop from '../panels/panelHeaderTop';
import panelHeaderMain from '../panels/panelHeaderMain';
import { el } from 'redom';
import panelMainServices from '../panels/panelMainServices';
import panelMainFeatures from '../panels/panelMainFeatures';
import panelMainProjects, {
  projectsRunSwiper,
} from '../panels/panelMainProjects';
import panelMainAbout from '../panels/panelMainAbout';
import panelMainQuestion from '../panels/panelMainQuestion';
import panelMainContacts from '../panels/panelMainContacts';

export default function createPageMain() {
  // const btn = el('button.btn-unknown', 'НАЖМИ МЕНЯ');
  // btn.addEventListener('click', () => {
  // router.navigate(getPagePath('/abcdefg'));
  // });
  // ? шапка
  const background = elementHeaderBackground();
  const container = elementContainer([
    panelHeaderTop(),
    panelHeaderMain(),
    elementIcon('swimming-pool', 'header'),
  ]);
  const header = el('header.header', [background, container]);

  // ? тело
  const main = el('main.main', [
    panelMainServices(),
    panelMainFeatures(),
    panelMainProjects(),
    panelMainAbout(),
    panelMainQuestion(),
    panelMainContacts(),
  ]);

  // ? страница
  const page = el('.page', [header, main]);

  updatePageContent(page);
  projectsRunSwiper();
}
