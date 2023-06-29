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
import iconChairs from '../assets/icons/pageIcons/icon-chairs.svg';
// import servicesPools from '../assets/img/services/services-building-pools.jpg';
// import servicesArtificial from '../assets/img/services/services-artificial.jpg';
// import servicesFontains from '../assets/img/services/services-building-fontains.jpg';
// import servicesDewatering from '../assets/img/services/services-dewatering.jpg';
// import servicesWatering from '../assets/img/services/services-watering.jpg';
// import servicesLandscaping from '../assets/img/services/services-landscaping.jpg';
import featuresTechno from '../assets/icons/features/techno.svg';
import featuresWork from '../assets/icons/features/work.svg';
import featuresFull from '../assets/icons/features/full.svg';
import featuresPrice from '../assets/icons/features/price.svg';
import featuresService from '../assets/icons/features/service.svg';
import featuresGarantee from '../assets/icons/features/garantee.svg';
import projectPool1 from '../assets/img/projects/projects-pool-1.jpg';
import projectPool2 from '../assets/img/projects/projects-pool-2.jpg';
import projectPool3 from '../assets/img/projects/projects-pool-3.jpg';
import projectPool4 from '../assets/img/projects/projects-pool-4.jpg';
import projectPool5 from '../assets/img/projects/projects-pool-5.jpg';
import projectPool6 from '../assets/img/projects/projects-pool-6.jpg';
import projectPool7 from '../assets/img/projects/projects-pool-7.jpg';
import iconBtnProjPrev from '../assets/icons/projects/swiper-projects-prev.svg';
import iconBtnProjNext from '../assets/icons/projects/swiper-projects-next.svg';
import contactVK from '../assets/icons/contacts/vk.svg';
import contactWA from '../assets/icons/contacts/whatsapp.svg';

export const DOCTITLE = 'BSE';
export const REPONAME = 'PoolsBSE';

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

export const PAGE_ICONS = [
  { id: 'swimming-pool', svg: iconSwimmingPool },
  { id: 'chairs', svg: iconChairs },
];

export const FEATURES = [
  {
    id: 'techno',
    title: 'Соблюдение технологических норм',
    descr:
      'Мы используем только качественные строительные, ландшафтные и растительные материалы.',
    svg: featuresTechno,
  },
  {
    id: 'work',
    title: 'Высокую культуру производства работ',
    descr:
      'Своевременная уборка и поддержание чистоты при монтаже оборудования и строительстве объекта.',
    svg: featuresWork,
  },
  {
    id: 'full',
    title: 'Полный цикл работ "Под Ключ"',
    descr:
      'Выполнение всех работ от первоначальной идеи, до конечного воплощения проекта- «под ключ». При реализации проекта мы берем на себя выполнение всех сопутствующих работ.',
    svg: featuresFull,
  },
  {
    id: 'price',
    title: 'Гибкую ценовую политику',
    descr:
      'Подберём решение которое подходит именно Вам, при комплексных решениях предоставляем скидки и подарки.',
    svg: featuresPrice,
  },
  {
    id: 'service',
    title: 'Гарантийное и сервисное обслуживание',
    descr:
      'Осуществляем гарантийное и постгарантийное обслуживание, воевременная замена оборудования, мониторинг работы систем.',
    svg: featuresService,
  },
  {
    id: 'garantee',
    title: 'Гарантию на все работы',
    descr:
      'Наша компания предоставляет гарантию 1-год на посаженные нами растения и проделанные работы.',
    svg: featuresGarantee,
  },
];

export const PROJECTS = [
  { id: 'pool-1', photo: projectPool1 },
  { id: 'pool-2', photo: projectPool2 },
  { id: 'pool-3', photo: projectPool3 },
  { id: 'pool-4', photo: projectPool4 },
  { id: 'pool-5', photo: projectPool5 },
  { id: 'pool-6', photo: projectPool6 },
  { id: 'pool-7', photo: projectPool7 },
];

export const SWIPERS = [
  { id: 'projects', btnSvgPrev: iconBtnProjPrev, btnSvgNext: iconBtnProjNext },
];

export const PARAMS = [
  {
    id: 'length',
    name: 'length',
    caption: 'Длина бассейна',
    placeholder: 'например, 5 метров',
    type: 'number',
  },
  {
    id: 'depth',
    name: 'depth',
    caption: 'Глубина бассейна',
    placeholder: 'например, 1.5 метра',
    type: 'number',
  },
  {
    id: 'width',
    name: 'width',
    caption: 'Ширина бассейна',
    placeholder: 'например, 6 метров',
    type: 'number',
  },
  {
    id: 'city',
    name: 'city',
    caption: 'Город',
    placeholder: 'Москва, Уфа',
    type: 'text',
  },
  {
    id: 'phone',
    name: 'phone',
    caption: 'Номер телефона',
    placeholder: '+7 (911) 642-32-99',
    type: 'tel',
  },
];

export const CONTACTS = [
  {
    id: 1,
    value: '+7 (111) 123-45-55',
    text: '',
    type: 'tel',
    target: '_self',
  },
  {
    id: 2,
    value: '+7 (222) 321-23-55',
    text: 'Сочи',
    type: 'tel',
    target: '_self',
  },
  {
    id: 3,
    value: '+7 (333) 456-78-22',
    text: 'Севастополь',
    type: 'tel',
    target: '_self',
  },
  {
    id: 4,
    value: 'https://whatsapp.com',
    text: 'WhatsApp',
    type: 'link',
    target: '_blank',
    svg: contactWA,
  },
  {
    id: 5,
    value: 'https://vk.com',
    text: 'VK',
    type: 'link',
    target: '_blank',
    svg: contactVK,
  },
];
