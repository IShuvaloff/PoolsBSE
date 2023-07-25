import Navigo from 'navigo';
import createPage from './pages/createPage';
import { REPONAME } from './constants';
import { panelBurgerMenuClose } from './panels/panelBurgerMenu';

const router = new Navigo(`/${REPONAME}`);

router
  .on('/', () => createPage('main'))
  .on('/pools', () => createPage('pools'))
  .on('/artificial', () => createPage('artificial'))
  .on('/fontains', () => createPage('fontains'))
  .on('/dewatering', () => createPage('dewatering'))
  .on('/watering', () => createPage('watering'))
  .on('/landscaping', () => createPage('landscaping'))
  // .on('/page/:id', (data) => {
  //   // ? страница с параметрами
  //   mainApp.innerHTML = '';
  //   const text = el('p.dynamic-text', `Параметр id=${data.data?.id}`);
  //   mount(mainApp, text);
  // })
  .on('*', () => createPage('unknown'))
  .resolve();

export { router };

export function openPage(pageName) {
  const page = pageName.trim();
  if (!page) return;

  const route = `/${page === 'main' ? '' : page}`;
  console.log(route);

  panelBurgerMenuClose();
  router.navigate(route);
}
