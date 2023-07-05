import './slider.css';

export default class Slider {
  _defMinValue = 0;
  _defMaxValue = 10;
  _defCurrentValue = 5;

  slider;

  constructor(
    elementId,
    { minValue, maxValue, currentValue, onChangeValue, onInputValue }
  ) {
    this.slider = document.getElementById(elementId);
    if (!this.slider) return;

    this.slider.setAttribute('type', 'range');
    this.slider.setAttribute('min', minValue);
    this.slider.setAttribute('max', maxValue);
    this.slider.setAttribute('value', currentValue);

    if (onChangeValue) this.on('change', onChangeValue);
    if (onInputValue) this.on('input', onInputValue);

    return this;
  }

  getValue() {
    return this.slider.value;
  }

  setValue(value) {
    this.slider.value = value;
  }

  getElement() {
    return this.slider;
  }

  on(eventName, handler) {
    this.getElement().addEventListener(eventName, handler);
  }
}
