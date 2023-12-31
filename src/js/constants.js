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
import iconStreetPool from '../assets/icons/pageIcons/icon-street-pool.svg';
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
import poolConcrete from '../assets/img/photos/pool-types/pool-concrete.jpg';
import poolScutal from '../assets/img/photos/pool-types/pool-scutal.jpg';
import poolNonchlorine from '../assets/img/photos/pool-types/pool-nonchlorine.jpg';
import poolWireframe from '../assets/img/photos/pool-types/pool-wireframe.jpg';
import poolComposite from '../assets/img/photos/pool-types/pool-composite.jpg';
import poolSpa from '../assets/img/photos/pool-types/pool-spa.jpg';

export const DOCTITLE = 'BSE';
export const REPONAME = 'PoolsBSE';
const TITLE = 'Строительство бассейнов и водоемов под ключ';

export const PAGES = [
  {
    name: 'unknown',
    title: 'Страница не найдена',
  },
  {
    name: 'main',
    title: TITLE,
  },
  {
    name: 'pools',
    title: `${TITLE} - Бассейны`,
  },
  {
    name: 'artificial',
    title: `${TITLE} - Водоёмы`,
  },
  {
    name: 'fontains',
    title: `${TITLE} - Фонтаны`,
  },
  {
    name: 'dewatering',
    title: `${TITLE} - Водоотведение`,
  },
  {
    name: 'watering',
    title: `${TITLE} - Системы автополива`,
  },
  {
    name: 'landscaping',
    title: `${TITLE} - Ландшафтный дизайн`,
  },
];

export const MENU_ITEMS = [
  {
    id: 'main',
    name: 'main-page',
    caption: 'Главная страница',
    captionShort: 'Главная',
    onlyNavList: true,
  },
  {
    id: 'pools',
    name: 'building-pools',
    caption: 'Строительство бассейнов',
    captionShort: 'Бассейны',
    descr:
      'Разработка дизайнов и строительство любых бассейнов по вашему желанию',
    svg: pools,
    photoMain: photoPools,
    // photoServices: servicesPools,
    checked: false,
    onlyNavList: false,
  },
  {
    id: 'artificial',
    name: 'artificial',
    caption: 'Искусственные водоемы',
    captionShort: 'Искусственные водоемы',
    descr:
      'Проектирование,  строительство и ремонт общественных и частных бассейнов',
    svg: artifical,
    photoMain: photoArtificial,
    // photoServices: servicesArtificial,
    checked: true,
    onlyNavList: false,
  },
  {
    id: 'fontains',
    name: 'building-fontains',
    caption: 'Строительство фонтанов',
    captionShort: 'Фонтаны',
    descr:
      'Удивительные и непревзойденные фонтаны для любого архитектурного коллажа',
    svg: fontains,
    photoMain: photoFontains,
    // photoServices: servicesFontains,
    checked: false,
    onlyNavList: false,
  },
  {
    id: 'dewatering',
    name: 'dewatering',
    caption: 'Водоотведение',
    captionShort: 'Водоотведение',
    descr: 'Новейшие технологии для наиболее эффективного водоотведения',
    svg: dewatering,
    photoMain: photoDewatering,
    // photoServices: servicesDewatering,
    checked: false,
    onlyNavList: false,
  },
  {
    id: 'watering',
    name: 'watering',
    caption: 'Системы авто полива',
    captionShort: 'Системы автополива',
    descr: 'Установка автоматических систем полива для вашего сада',
    svg: watering,
    photoMain: photoWatering,
    // photoServices: servicesWatering,
    checked: false,
    onlyNavList: false,
  },
  {
    id: 'landscaping',
    name: 'landscaping',
    caption: 'Ландшафтный дизайн',
    captionShort: 'Ландшафтный дизайн',
    descr: 'Разработка ландшафтных дизайнов от лучших дизайнеров компании',
    svg: landscaping,
    photoMain: photoLandscaping,
    // photoServices: servicesLandscaping,
    checked: false,
    onlyNavList: false,
  },
  {
    id: 'contacts',
    name: 'contacts',
    caption: 'Список контактов',
    captionShort: 'Контакты',
    onlyNavList: true,
  },
];

export const PAGE_ICONS = [
  { id: 'swimming-pool', svg: iconSwimmingPool },
  { id: 'chairs', svg: iconChairs },
  { id: 'street-pool', svg: iconStreetPool },
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

export const POOL_TYPES = [
  {
    id: 'concrete',
    title: 'Бетонные бассейны',
    description:
      'Бетонный бассейн предоставляет большой простор для дизайнера (любые размеры и форма). У него имеются конструктивные преимущества, одно из главных – опора для плиты перекрытия пола.',
    features: [
      'Любые размеры и формы',
      'Долгий срок службы',
      'Возможность установки дополнительного оборудования',
    ],
    photo: poolConcrete,
  },
  {
    id: 'scutal',
    title: 'Сборно-щитовые бассейны',
    description:
      'Сборный бассейн – это наружный каркас из металлических или пластиковых щитов и выстиланной пленкой внутри. Всесезонный морозостойкий бассейн, который можно использовать зимой или законсервировать.',
    features: [
      'Простота в монтаже и демонтаже',
      'Неприхотливость в уходе',
      'Легкость в обслуживании',
      'Ремонтопригодность',
    ],
    photo: poolScutal,
  },
  {
    id: 'nonchlorine',
    title: 'Безхлорные бассейны',
    description:
      'Безхлорный бассейн - бассейн, в котором применяются альтернативные методы регулярной очистки воды, например активным кислородом, озонированием, обработкой ультрафиолетом и др.',
    features: [
      'Любые размеры и формы',
      'Неприхотливость в уходе',
      'Легкость в обслуживании',
    ],
    photo: poolNonchlorine,
  },
  {
    id: 'composite',
    title: 'Композитные бассейны',
    description:
      'Композитный бассейн — это готовая легкая и тонкая (до 30 мм) чаша, состоящая из 6-9 слоев разных материалов, которые равномерно распределяют между собой статическую и динамическую нагрузки.',
    features: [
      'Устойчивость к влиянию атмосферной среды',
      'Практически любая комплектация.',
      'Легкость в обслуживании',
      'Ремонтопригодность',
    ],
    photo: poolComposite,
  },
  {
    id: 'wireframe',
    title: 'Каркасные бассейны',
    description:
      'Каркасный бассейн - это быстровозводимая конструкция из металлического или пластикового каркаса - стержневой или листовой - и ПВХ чаши. Чаша крепится к каркасу специальной фурнитурой.',
    features: [
      'Устойчивость к повреждениям',
      'Любые размеры и формы',
      'Устойчивость к перепадам температур',
      'Не самая высокая цена',
    ],
    photo: poolWireframe,
  },
  {
    id: 'spa',
    title: 'Спа',
    description:
      'Гидромассажный бассейн - это бассейн, оснащенный регулируемой системой подогрева и характеризующийся замкнутым циклом очистки воды. Широко применяются для терапевтического воздействия на тело человека.',
    features: [
      'Простота эксплуатации',
      'Легкость ухода за водой',
      'Надежность и долговечность',
      'Высокоэффективный массаж',
    ],
    photo: poolSpa,
  },
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
    showInPhones: true,
  },
  {
    id: 2,
    value: '+7 (222) 321-23-55',
    text: 'Сочи',
    type: 'tel',
    target: '_self',
    showInPhones: true,
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
