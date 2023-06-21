import { el } from 'redom';

class ElementSubtitle {
  constructor(text) {
    return el('h2.subtitle', text.trim());
  }
}
class ElementSubtitleServices extends ElementSubtitle {
  constructor(text) {
    const subtitle = super(text);
    subtitle.classList.add('services__title');
    return subtitle;
  }
}
class ElementSubtitleLight extends ElementSubtitle {
  constructor(text) {
    const subtitle = super(text);
    subtitle.classList.add('subtitle--light');
    return subtitle;
  }
}
class ElementSubtitleLeft extends ElementSubtitle {
  constructor(text) {
    const subtitle = super(text);
    subtitle.classList.add('subtitle--left');
    return subtitle;
  }
}

export default function elementSubtitle(text) {
  return new ElementSubtitle(text);
}

export function elementSubtitleServices(text) {
  return new ElementSubtitleServices(text);
}

export function elementSubtitleLight(text) {
  return new ElementSubtitleLight(text);
}

export function elementSubtitleLeft(text) {
  return new ElementSubtitleLeft(text);
}
