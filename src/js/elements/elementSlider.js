import { el } from 'redom';

export default function elementSlider(className) {
  const slider = el(`input.slider.${className}__slider#${className}-slider`);

  const container = el(`.slider-container.${className}__slider-container`, [
    slider,
  ]);

  return container;
}
