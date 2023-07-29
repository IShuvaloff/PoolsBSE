import { el, setChildren } from 'redom';
import './button.sass';

export default class Button {
  // ? свойства
  _btn = '';
  _CLASSNAME = 'button';
  _TYPEDEF = 'button'; //submit

  // ? обработчик клика по умолчанию
  _btnClickDef = () => {
    console.log(this._btn);
  };

  // ? инлайновый svg-код
  _getSvgHtml(svg) {
    return !svg?.id?.trim()
      ? ''
      : `<svg viewBox="${svg.viewBox}">
           <use xlink:href="#${svg.id}" />
         </svg>`;
  }

  // ? DOM-элемент иконки svg
  _createIcon = (svg) => {
    const svgHtml = this._getSvgHtml(svg);
    if (!svgHtml) return '';

    const icon = el(`.${this._CLASSNAME}__icon`);
    icon.innerHTML = svgHtml;

    return icon;
  };

  // ? DOM-элемент текста
  _createText = (text) => {
    if (!text?.trim()) return '';
    return el(`p.${this._CLASSNAME}__text`, text.trim());
  };

  constructor({
    id,
    classNames = [],
    type = this._TYPEDEF,
    caption,
    svg,
    callbackClick,
  }) {
    this._btn = el(`button.${this._CLASSNAME}`);

    // id
    if (id?.trim()) this._btn.id = id.trim();

    // classes
    if (classNames?.length) {
      classNames
        .map((item) => item.trim())
        .forEach((item) => this._btn.classList.add(item));
    }

    // type
    this._btn.type = type?.trim()?.toLowerCase() ?? this._TYPE;

    // content
    setChildren(this._btn, [this._createIcon(svg), this._createText(caption)]);

    // listeners
    this._btn.addEventListener('click', callbackClick ?? this._btnClickDef);

    return this._btn;
  }
}
