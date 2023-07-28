import { el } from 'redom';
import panelFooter from '../panels/panelFooter';
import updatePageContent from './updatePage';
import panelHeader from '../panels/panelHeader';
import panelDialogCallOrder from '../panels/panelDialogCallOrder';
import panelBurgerMenu from '../panels/panelBurgerMenu';
import { updateHeaderMenu } from '../elements/elementMenuIconItem';

export default function createPageArtificial() {
  const burgerMenu = panelBurgerMenu();

  // ? диалог
  const dialog = panelDialogCallOrder();

  // ? шапка
  const header = panelHeader();

  // ? тело
  const main = el(
    'main.main.main--artificial',
    el('.container', 'ИНФОРМАЦИЯ О СООРУЖЕНИИ ИСКУССТВЕННЫХ ВОДОЁМОВ...')
  );

  // ? футер
  const footer = panelFooter();

  // ? страница
  const page = el('.page', [burgerMenu, dialog, header, main, footer]);

  updatePageContent(page);

  // ! обновить отдельные компоненты меню
  // ? обновить кнопки и шапку
  updateHeaderMenu('artificial');
}
