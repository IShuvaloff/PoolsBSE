import pools from '../assets/icons/services/services-building-pools.svg';
import artifical from '../assets/icons/services/services-artificial.svg';
import fontains from '../assets/icons/services/services-building-fontains.svg';
import dewatering from '../assets/icons/services/services-dewatering.svg';
import watering from '../assets/icons/services/services-watering.svg';
import landscaping from '../assets/icons/services/services-landscaping.svg';
import photoPools from '../assets/img/photos/photo-pools.jpg';
import photoArtificial from '../assets/img/photos/photo-artificial.jpg';
import photoFontains from '../assets/img/photos/photo-fontains.jpg';
import photoDewatering from '../assets/img/photos/photo-dewatering.jpg';
import photoWatering from '../assets/img/photos/photo-watering.jpg';
import photoLandscaping from '../assets/img/photos/photo-landscaping.jpg';
import iconSwimmingPool from '../assets/icons/pageIcons/icon-swimming-pool.svg';
// import servicesPools from '../assets/img/services/services-building-pools.jpg';
// import servicesArtificial from '../assets/img/services/services-artificial.jpg';
// import servicesFontains from '../assets/img/services/services-building-fontains.jpg';
// import servicesDewatering from '../assets/img/services/services-dewatering.jpg';
// import servicesWatering from '../assets/img/services/services-watering.jpg';
// import servicesLandscaping from '../assets/img/services/services-landscaping.jpg';

export const DOCTITLE = 'BSE';

export const PAGES = [
  {
    name: 'unknown',
    title: 'Страница не найдена',
  },
  {
    name: 'main',
    title: 'Строительство бассейнов и водоемов под ключ',
  },
];

export const MENU_ITEMS = [
  {
    id: 'pools',
    name: 'building-pools',
    caption: 'Строительство бассейнов',
    descr:
      'Разработка дизайнов и строительство любых бассейнов по вашему желанию',
    svg: pools,
    photoMain: photoPools,
    // photoServices: servicesPools,
    checked: false,
  },
  {
    id: 'artificial',
    name: 'artificial',
    caption: 'Искусственные водоемы',
    descr:
      'Проектирование,  строительство и ремонт общественных и частных бассейнов',
    svg: artifical,
    photoMain: photoArtificial,
    // photoServices: servicesArtificial,
    checked: true,
  },
  {
    id: 'fontains',
    name: 'building-fontains',
    caption: 'Строительство фонтанов',
    descr:
      'Удивительные и непревзойденные фонтаны для любого архитектурного коллажа',
    svg: fontains,
    photoMain: photoFontains,
    // photoServices: servicesFontains,
    checked: false,
  },
  {
    id: 'dewatering',
    name: 'dewatering',
    caption: 'Водоотведение',
    descr: 'Новейшие технологии для наиболее эффективного водоотведения',
    svg: dewatering,
    photoMain: photoDewatering,
    // photoServices: servicesDewatering,
    checked: false,
  },
  {
    id: 'watering',
    name: 'watering',
    caption: 'Системы авто полива',
    descr: 'Установка автоматических систем полива для вашего сада',
    svg: watering,
    photoMain: photoWatering,
    // photoServices: servicesWatering,
    checked: false,
  },
  {
    id: 'landscaping',
    name: 'landscaping',
    caption: 'Ландшафтный дизайн',
    descr: 'Разработка ландшафтных дизайнов от лучших дизайнеров компании',
    svg: landscaping,
    photoMain: photoLandscaping,
    // photoServices: servicesLandscaping,
    checked: false,
  },
];

export const PAGE_ICONS = [{ id: 'swimming-pool', svg: iconSwimmingPool }];
