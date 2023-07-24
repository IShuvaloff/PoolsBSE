import Navigo from 'navigo';
import createPage from './pages/createPage';
import { REPONAME } from './constants';

const router = new Navigo(`/${REPONAME}`);

router
  .on('/', () => createPage('main'))
  .on('/pools/', () => createPage('pools'))
  // .on('/page/:id', (data) => {
  //   // ? страница с параметрами
  //   mainApp.innerHTML = '';
  //   const text = el('p.dynamic-text', `Параметр id=${data.data?.id}`);
  //   mount(mainApp, text);
  // })
  .on('*', () => createPage('unknown'))
  .resolve();

export { router };
