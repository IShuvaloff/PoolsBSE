import { el } from 'redom';
import ymaps from 'ymaps';
import placemarkIcon from '../../assets/img/map-point.png';

export default function elementMap() {
  const map = el('div.contacts__map', { id: 'map' });
  if (!map) return;

  ymaps
    .load(
      'https://api-maps.yandex.ru/2.1/?apikey=10f41f56-5d23-4a7f-8a67-38e70dc4e622&lang=ru_RU'
    )
    .then((maps) => {
      maps.ready(async () => {
        const myMap = new maps.Map(map.id, {
          center: [54.79538, 56.058593],
          zoom: 15,
          controls: ['searchControl', 'zoomControl'],
        });

        // myMap.behaviors.disable('scrollZoom');

        // maps.geoObjects.removeAll();
        let myPoints = [{ lat: 54.796527, lon: 56.058781 }];

        myPoints.forEach((point) => {
          const placemark = new maps.Placemark([point.lat, point.lon], {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: placemarkIcon, // ! не подтягивается новая иконка
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38],
          });
          myMap.geoObjects.add(placemark);
        });
      });
    })
    .catch((error) => console.log('Ошибка загрузки Яндекс-карт', error));

  // // ! тест - изображения корректно выводится
  // const placemarkBlock = el('img.placemark');
  // placemarkBlock.setAttribute('src', placemarkIcon);

  return el('.maps', [/*placemarkBlock,*/ map]);
}
