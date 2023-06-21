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

export default function elementSubtitle(text) {
  return new ElementSubtitle(text);
}

export function elementSubtitleServices(text) {
  return new ElementSubtitleServices(text);
}
