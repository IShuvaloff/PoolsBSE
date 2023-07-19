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
  startSwiperSliderSynchro,
} from '../panels/panelMainProjects';
import panelMainAbout from '../panels/panelMainAbout';
import panelMainQuestion from '../panels/panelMainQuestion';
import panelMainContacts from '../panels/panelMainContacts';
import panelFooterTop from '../panels/panelFooterTop';
import elementCopyright from '../elements/elementCopyright';
import { startServicesSliderSynchro } from '../elements/elementServices';
import panelBurgerMenu from '../panels/panelBurgerMenu';
import panelDialog from '../panels/panelDialog';

export default function createPageMain() {
  // const btn = el('button.btn-unknown', 'НАЖМИ МЕНЯ');
  // btn.addEventListener('click', () => {
  // router.navigate(getPagePath('/abcdefg'));
  // });
  // ? бургер-меню
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
  const page = el('.page', [burgerMenu, dialog, header, main, footer]);

  updatePageContent(page);

  // ! запуск слайдера для списка услуг
  startServicesSliderSynchro();

  // ! запуск свайпера на странице и подвязка на него слайдера
  startSwiperSliderSynchro();
}
