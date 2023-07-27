import { el } from 'redom';
import panelFooter from '../panels/panelFooter';
import updatePageContent from './updatePage';
import panelHeader from '../panels/panelHeader';
import panelDialogCallOrder from '../panels/panelDialogCallOrder';
import panelBurgerMenu from '../panels/panelBurgerMenu';
import { updateHeaderMenu } from '../elements/elementMenuIconItem';
import panelPoolsTypes from '../panels/panelPoolsTypesCards';

export default function createPagePools() {
  const burgerMenu = panelBurgerMenu();

  // ? диалог
  const dialog = panelDialogCallOrder();

  // ? шапка
  const header = panelHeader();

  // ? тело
  const main = el('main.main', [panelPoolsTypes()]);

  // ? футер
  const footer = panelFooter();

  // ? страница
  const page = el('.page', [burgerMenu, dialog, header, main, footer]);

  updatePageContent(page);

  // ! обновить отдельные компоненты меню
  // ? обновить кнопки и шапку
  updateHeaderMenu('pools');
}
