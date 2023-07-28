import updatePageContent from './updatePage';
import panelHeader from '../panels/panelHeader';
import { el } from 'redom';
import panelMainServices from '../panels/panelMainServices';
import panelMainFeatures from '../panels/panelMainFeatures';
import panelMainProjects, {
  startSwiperSliderSynchro,
} from '../panels/panelMainProjects';
import panelMainAbout from '../panels/panelMainAbout';
import panelMainQuestion from '../panels/panelMainQuestion';
import panelMainContacts from '../panels/panelMainContacts';
import { startServicesSliderSynchro } from '../elements/elementServices';
import panelBurgerMenu from '../panels/panelBurgerMenu';
import panelDialogCallOrder from '../panels/panelDialogCallOrder';
import panelFooter from '../panels/panelFooter';

export default function createPageMain() {
  // ? бургер-меню
  const burgerMenu = panelBurgerMenu();

  // ? диалог
  const dialog = panelDialogCallOrder();

  // ? шапка
  const header = panelHeader();

  // ? тело
  const main = el('main.main', [
    panelMainServices(),
    panelMainFeatures(),
    panelMainProjects('main'),
    panelMainAbout(),
    panelMainQuestion(),
    panelMainContacts(),
  ]);

  // ? футер
  const footer = panelFooter();

  // ? страница
  const page = el('.page', [burgerMenu, dialog, header, main, footer]);

  updatePageContent(page);

  // ! запуск слайдера для списка услуг
  startServicesSliderSynchro();

  // ! запуск свайпера на странице и подвязка на него слайдера
  startSwiperSliderSynchro();
}
