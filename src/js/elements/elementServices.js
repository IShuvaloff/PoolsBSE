import { el, mount } from 'redom';
import { MENU_ITEMS } from '../constants';
import elementServiceCard from '../elements/elementServiceCard';
import '../components/slider/slider';
import elementSlider from './elementSlider';
import Slider from '../components/slider/slider';

function expandServiceCard({ event, card, execSliderEvent = true }) {
  event?.preventDefault();
  document.querySelectorAll('.services__card').forEach((item) => {
    item.classList.remove('service--checked');
  });
  (card || this)?.classList.add('service--checked'); // card - для запуска функции извне обработчика событий

  // ? включить синхронизацию промотки списка услуг с событиями слайдера (при наличии такового)
  if (screen.width >= 1920) return;

  const num = (card || this)?.dataset?.serviceNumber;
  const sliderElement = document.getElementById('services-slider');
  if (!num || !sliderElement) return;
  sliderElement.value = num;
  if (execSliderEvent) {
    // вызывать событие slider.oninput, если не указано false
    sliderElement.dispatchEvent(new Event('input'));
  }
}

function serviceCardKeyPress(e) {
  if (!['Enter', 'Space'].includes(e.code)) return;
  expandServiceCard({ event: e, card: this });
}

// ? включить синхронизацию событий слайдера с промоткой списка услуг
export function startServicesSliderSynchro() {
  const currentCard = document.querySelector('.service--checked');
  const scrollOptions = {
    behavior: 'smooth', // плавное выравнивание
    block: 'center', // выравнивание по вертикали
    inline: 'center', // выравнивание по горизонтали
  };

  const slider = new Slider('services-slider', {
    minValue: 1,
    maxValue: document.querySelectorAll('.services__card').length,
    currentValue: parseInt(currentCard.dataset.serviceNumber),
    onInputValue: () => {
      const card = document.getElementById(`service-${slider.getValue()}`);
      card.scrollIntoView(scrollOptions);
      expandServiceCard({ card, execSliderEvent: false });
    },
  });
  // currentCard.scrollIntoView(scrollOptions); // -----> не стоит запускать, т.к. при первой загрузке страницы идет отмотка вниз к этому блоку!

  // ! обратную синхронизацию смотри в функции expandServiceCard
}

export default function elementServices() {
  const list = el('.services__list');
  let i = 0;
  MENU_ITEMS.forEach((item) => {
    if (item.onlyNavList) return;

    i++;
    const card = elementServiceCard(item.id, item.checked);
    card.classList.add('services__card');
    card.id = `service-${i}`;
    card.dataset.serviceNumber = i;
    card.addEventListener('click', expandServiceCard);
    card.addEventListener('keyup', serviceCardKeyPress);

    mount(list, card);
    return list;
  });

  const sliderElement = elementSlider('services');

  return el('.services', [list, sliderElement]);
}
