import { el } from 'redom';
import { elementSubtitleLeft } from '../elements/elementSubtitle';
import elementPhoto from '../elements/elementPhoto';
import photoPoolsAbout from '../../assets/img/photos/photo-pools-about.jpg';
import photoWater from '../../assets/img/photo-water.png';
import elementTextBlock from '../elements/elementTextBlock';

export default function panelMainAbout() {
  const title = elementSubtitleLeft('Статья о бассейнах');
  title.classList.add('about__title');

  const text = el('.about__text-wrapper', [
    elementTextBlock(
      'Обычный размер ванн в плавательном бассейне — 25 или 50 метров. Количество дорожек обычно бывает от 5 до 10. По центру каждой дорожки на дне, а также на торцах ванны делается разметка для того, чтобы пловцам легче было плыть без отклонений от прямолинейного курса. Поперёк ванны на расстоянии 5 м от начала и конца подвешиваются два шнура с флажками, они нужны пловцам на спине — чтобы видеть близость стенки и подготовиться к повороту.',
      'about'
    ),
    elementTextBlock(
      'На расстоянии 15 м от старта поперёк бассейна подвешивается шнур, который падает на воду при фальстарте и останавливает участников. Перед каждой дорожкой в начале и конце бассейна расположены стартовые тумбочки, с них прыгают в воду при старте пловцы кролем, брассом и баттерфляем. На тумбочках имеются рукоятки, за которые держатся пловцы на спине перед стартом. Детские бассейны могут быть любой формы и обычно неглубоки.',
      'about'
    ),
  ]);

  const photo = elementPhoto(photoPoolsAbout, 'about');

  const photoBackside = elementPhoto(photoWater, 'about');
  photoBackside.classList.add('about__photo--backside');

  const content = el('.about__content', [text, photo, photoBackside]);

  const block = el('.container.container--about.about', [title, content]);
  block.classList.add('about--pools');

  return block;
}
