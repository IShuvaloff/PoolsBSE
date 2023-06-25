import { el } from 'redom';
import { elementSubtitleLeft } from '../elements/elementSubtitle';
import elementPhoto from '../elements/elementPhoto';
import photoAbout from '../../assets/img/photos/photo-about.jpg';
import elementIcon from '../elements/elementIcon';
import elementTextBlock from '../elements/elementTextBlock';

export default function panelMainAbout() {
  const title = elementSubtitleLeft('О нашей компании');
  title.classList.add('about__title');

  const text = el('.about__text-wrapper', [
    elementTextBlock(
      'Стабильно развивающаяся компания, предоставляющая широкий спектр услуг от строительства бассейнов для загородных домов и участков, до сооружения водных аттракционов, детских площадок и городских фонтанов.',
      'about'
    ),
    elementTextBlock(
      'Компания была основана в 2007 году и за эти годы заняла достойное место на рынке услуг.',
      'about'
    ),
    elementTextBlock(
      'Основной принцип нашей работы заключается в том, что мы учитываем все пожелания клиента.',
      'about'
    ),
    elementTextBlock(
      'При сооружении бассейна, фонтана, искусственного водоёма и т.д.,  мы непременно будем стремиться воплотить в реальность любую Вашу фантазию, можно сказать, Вы будете выступать в качестве дизайнера будущего проекта.',
      'about'
    ),
  ]);

  const photo = elementPhoto(photoAbout);

  const icon = elementIcon('chairs', 'about');

  const content = el('.about__content', [text, photo, icon]);

  return el('.container.container--about.about', [title, content]);
}
