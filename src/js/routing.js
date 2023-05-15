import Navigo from 'navigo';
const router = new Navigo('/');
import { el, mount, setChildren } from 'redom';

const mainApp = document.getElementById('main-app');

// ! демонстрация плагина redom
router
  .on('/', () => {
    // ? главная страница
    mainApp.innerHTML = '';
    const text = el('p.dynamic-text', 'Проект собран на Webpack');
    const btn = el('button.btn-unknown', 'НАЖМИ МЕНЯ');
    btn.addEventListener('click', () => {
      router.navigate('/abcdefg');
    });
    setChildren(mainApp, [text, btn]);
  })
  .on('/unknownPage', () => {
    // ? несуществующая страница
    mainApp.innerHTML = '';
    const text = el('p.dynamic-text', 'СТРАНИЦА НЕ НАЙДЕНА!');
    mount(mainApp, text);
  })
  .on('/page/:id', (data) => {
    // ? страница с параметрами
    mainApp.innerHTML = '';
    const text = el('p.dynamic-text', `Параметр id=${data.data?.id}`);
    mount(mainApp, text);
  })
  .on('*', () => {
    // ? все остальные страницы
    router.navigate('/unknownPage');
  })
  .resolve();

export { router };
