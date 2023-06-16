import { el } from 'redom';
import elementTitlePrimary from '../elements/elementTitlePrimary';
import elementMenuIconsList from '../elements/elementMenuIconsList';
import elementCalculateParams from '../elements/elementCalculateParams';
import elementHeaderPhoto from '../elements/elementHeaderPhoto';

export default function panelHeaderMain(id = 'main') {
  const title = elementTitlePrimary('Предлагаем для вас');
  const nav = elementMenuIconsList();
  const calculation = elementCalculateParams();
  const photo = elementHeaderPhoto(id);

  const headerMain = el('.header__main', [title, nav, calculation, photo]);

  return headerMain;
}
