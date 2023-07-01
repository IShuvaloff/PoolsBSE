import { el, mount } from 'redom';
// import Swiper, { Scrollbar } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/scrollbar';
import { MENU_ITEMS } from '../constants';
import elementServiceCard from '../elements/elementServiceCard';

// export function runElementServicesFunctions() {
//   // Swiper.use([Scrollbar]);
//   new Swiper('.services__swiper', {
//     slidesPerGroup: 1,
//     slidesPerView: 3,
//     autoHeight: false,
//     modules: [Scrollbar],
//     scrollbar: {
//       el: '.services__swiper-scrollbar',
//       draggable: true,
//       hide: false,
//     },
//   });
// }

function expandServiceCard(e, card) {
  e?.preventDefault();
  document.querySelectorAll('.services__card').forEach((item) => {
    item.classList.remove('service--checked');
  });
  (card || this)?.classList.add('service--checked'); // card - для запуска функции извне обработчика событий
}

function serviceCardKeyPress(e) {
  if (!['Enter', 'Space'].includes(e.code)) return;
  expandServiceCard(e, this);
}

export default function elementServices() {
  const list = el('.services__list');
  MENU_ITEMS.forEach((item) => {
    if (item.onlyNavList) return;

    const card = elementServiceCard(item.id, item.checked);
    card.classList.add('services__card');
    card.addEventListener('click', expandServiceCard);
    card.addEventListener('keyup', serviceCardKeyPress);

    mount(list, card);
    return list;
  });

  // const scrollbar = el('.services__swiper-scrollbar');

  // return el('.services__container', [list]);
  return list;
}
