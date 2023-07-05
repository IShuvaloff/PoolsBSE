import { el } from 'redom';

export default function elementSlider(className) {
  const slider = el('input.slider.projects__slider#projects-slider');

  const container = el(`.slider-container.${className}__slider-container`, [
    slider,
  ]);

  return container;
}
