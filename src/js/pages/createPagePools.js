import { el } from 'redom';
// import { startServicesSliderSynchro } from '../elements/elementServices';
import panelFooter from '../panels/panelFooter';
// import { startSwiperSliderSynchro } from '../panels/panelMainProjects';
import updatePageContent from './updatePage';
import panelHeader from '../panels/panelHeader';
import panelDialogCallOrder from '../panels/panelDialogCallOrder';
import panelBurgerMenu from '../panels/panelBurgerMenu';
import { updateHeaderMenu } from '../elements/elementMenuIconItem';

export default function createPagePools() {
  const burgerMenu = panelBurgerMenu();

  // ? диалог
  const dialog = panelDialogCallOrder();

  // ? шапка
  const header = panelHeader();

  // ? тело
  // const main = el('main.main', [
  //   panelMainServices(),
  //   panelMainFeatures(),
  //   panelMainProjects(),
  //   panelMainAbout(),
  //   panelMainQuestion(),
  //   panelMainContacts(),
  // ]);

  // ? футер
  const footer = panelFooter();

  // ? страница
  const page = el('.page', [burgerMenu, dialog, header, footer]);

  updatePageContent(page);

  // ! обновить отдельные компоненты меню
  // ? обновить кнопки и шапку
  updateHeaderMenu('pools');

  // // ! запуск слайдера для списка услуг
  // startServicesSliderSynchro();

  // // ! запуск свайпера на странице и подвязка на него слайдера
  // startSwiperSliderSynchro();
}
