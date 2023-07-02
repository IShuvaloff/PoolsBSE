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
import panelFooterTop from '../panels/panelFooterTop';
import elementCopyright from '../elements/elementCopyright';

export default function createPageMain() {
  // const btn = el('button.btn-unknown', 'НАЖМИ МЕНЯ');
  // btn.addEventListener('click', () => {
  // router.navigate(getPagePath('/abcdefg'));
  // });
  // ? шапка
  const background = elementHeaderBackground();
  const container = elementContainer(
    [
      panelHeaderTop(),
      panelHeaderMain(),
      elementIcon('swimming-pool', 'header'),
    ],
    'header'
  );
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

  // ? футер
  const containerFooter = elementContainer(
    [panelFooterTop(), elementCopyright('footer')],
    'footer'
  );
  const footer = el('footer.footer', [containerFooter]);

  // ? страница
  const page = el('.page', [header, main, footer]);

  updatePageContent(page);
  projectsRunSwiper();
}
