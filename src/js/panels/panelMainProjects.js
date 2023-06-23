import { el, mount } from 'redom';
import { elementSubtitleLight } from '../elements/elementSubtitle';
import Swiper, { Scrollbar, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { PROJECTS } from '../constants';
import elementProject from '../elements/elementProject';
import { getSvgHtml, getSwiperItem } from '../utils';

export function projectsRunSwiper() {
  return new Swiper('.projects__swiper', {
    loop: false,
    modules: [Navigation, Pagination, Scrollbar],
    pagination: {
      el: '.projects__pagination',
      // type: 'progressbar',
      type: 'bullets',
      clickable: true,
      // bulletClass: '.projects__pagination-bullet',
      // bulletActiveClass: '.projects__pagination-bullet--active',
    },
    navigation: {
      nextEl: '.project__navigation-btn--btn-nav-next',
      prevEl: '.project__navigation-btn--btn-nav-prev',
    },
    scrollbar: {
      el: '.projects__scrollbar',
    },
  });
}

function swiperBtn(type, svg) {
  let btnClass;
  switch (type) {
    case 'prev':
      btnClass =
        '.projects__navigation-btn.project__navigation-btn--btn-nav-prev';
      break;
    case 'next':
      btnClass =
        '.projects__navigation-btn.project__navigation-btn--btn-nav-next';
      break;
  }
  const btn = el(btnClass);
  btn.innerHTML = getSvgHtml(svg);

  return btn;
}

export default function panelMainProjects() {
  const gradient = el('.gradient.gradient-bg.projects__gradient');

  const title = elementSubtitleLight('Выполненные проекты');
  title.classList.add('main__projects-title', 'projects__title');

  const wrapper = el('.swiper-wrapper.projects__wrapper');
  PROJECTS.forEach((item) => {
    const slide = el('.swiper-slide.projects__slide', elementProject(item.id));
    mount(wrapper, slide);
  });

  // ? все для свайпера
  const swiperItem = getSwiperItem('projects');

  const pagination = el('.projects__pagination');

  const btnPrev = swiperBtn('prev', swiperItem.btnSvgPrev);
  const btnNext = swiperBtn('next', swiperItem.btnSvgNext);

  const navigation = el('.swiper-navigation.projects__navigation', [
    btnPrev,
    btnNext,
  ]);

  const scrollbar = el('.swiper-scrollbar.projects__scrollbar');

  const swiper = el('.swiper.projects__swiper', [
    wrapper,
    pagination,
    navigation,
    scrollbar,
  ]);

  const container = el('.container.container--projects', [title, swiper]);

  return el('.main__projects.projects', [gradient, container]);
}
