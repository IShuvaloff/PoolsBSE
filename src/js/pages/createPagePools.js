import { el } from 'redom';
import elementContainer from '../elements/elementContainer';
import elementCopyright from '../elements/elementCopyright';
// import { startServicesSliderSynchro } from '../elements/elementServices';
import panelFooterTop from '../panels/panelFooterTop';
// import { startSwiperSliderSynchro } from '../panels/panelMainProjects';
import updatePageContent from './updatePage';
import panelHeaderTop from '../panels/panelHeaderTop';
import panelHeaderMain from '../panels/panelHeaderMain';
import elementIcon from '../elements/elementIcon';
import elementHeaderBackground from '../elements/elementHeaderBackground';
import panelDialog from '../panels/panelDialog';
import panelBurgerMenu from '../panels/panelBurgerMenu';

export default function createPagePools() {
  const burgerMenu = panelBurgerMenu();

  // ? диалог
  const dialog = panelDialog({
    title:
      'Запишитесь на замер с сайта и получите скидку до 50% на проектирование',
    titleSpecialPatterns: [{ from: 40, to: 52 }],
    inputs: [
      { id: 'service', placeholder: 'Вид услуги' },
      { id: 'request', placeholder: 'Записаться на замер' },
      { id: 'address', placeholder: 'Адрес' },
      { id: 'phone', placeholder: '+7 (123) 456-78-90' },
    ],
    btnText: 'Записаться на замер',
    className: 'order-request',
  });

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
  // const main = el('main.main', [
  //   panelMainServices(),
  //   panelMainFeatures(),
  //   panelMainProjects(),
  //   panelMainAbout(),
  //   panelMainQuestion(),
  //   panelMainContacts(),
  // ]);

  // ? футер
  const containerFooter = elementContainer(
    [panelFooterTop(), elementCopyright('footer')],
    'footer'
  );
  const footer = el('footer.footer', [containerFooter]);

  // ? страница
  const page = el('.page', [burgerMenu, dialog, header, footer]);

  updatePageContent(page);

  // // ! запуск слайдера для списка услуг
  // startServicesSliderSynchro();

  // // ! запуск свайпера на странице и подвязка на него слайдера
  // startSwiperSliderSynchro();
}
