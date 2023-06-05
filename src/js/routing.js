import Navigo from 'navigo';
const router = new Navigo('/');
import { el, mount, setChildren } from 'redom';
import createPage from './pages/createPage';

const mainApp = document.getElementById('main-app');

router
  .on('/', () => createPage('main'))
  // .on('/page/:id', (data) => {
  //   // ? страница с параметрами
  //   mainApp.innerHTML = '';
  //   const text = el('p.dynamic-text', `Параметр id=${data.data?.id}`);
  //   mount(mainApp, text);
  // })
  .on('*', () => createPage('unknown'))
  .resolve();

export { router };
