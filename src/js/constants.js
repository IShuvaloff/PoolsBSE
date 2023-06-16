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
    svg: pools,
    photoMain: photoPools,
  },
  {
    id: 'artificial',
    name: 'artificial',
    caption: 'Искусственные водоемы',
    svg: artifical,
    photoMain: photoArtificial,
  },
  {
    id: 'fontains',
    name: 'building-fontains',
    caption: 'Строительство фонтанов',
    svg: fontains,
    photoMain: photoFontains,
  },
  {
    id: 'dewatering',
    name: 'dewatering',
    caption: 'Водоотведение',
    svg: dewatering,
    photoMain: photoDewatering,
  },
  {
    id: 'watering',
    name: 'watering',
    caption: 'Системы авто полива',
    svg: watering,
    photoMain: photoWatering,
  },
  {
    id: 'landscaping',
    name: 'landscaping',
    caption: 'Ландшафтный дизайн',
    svg: landscaping,
    photoMain: photoLandscaping,
  },
];

export const PAGE_ICONS = [{ id: 'swimming-pool', svg: iconSwimmingPool }];
