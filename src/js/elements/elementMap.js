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
          center: [54.79238, 56.062593],
          zoom: 15,
          controls: [], //'searchControl', 'zoomControl'],
        });

        // myMap.behaviors.disable('scrollZoom');

        // maps.geoObjects.remove(...);

        const myPoints = [{ lat: 54.796527, lon: 56.058781 }];

        myPoints.forEach((point) => {
          const placemark = new maps.GeoObject(
            {
              geometry: { type: 'Point', coordinates: [point.lat, point.lon] },
              properties: {
                // контент метки
                iconContent: 'BSE', // ! отображается, если не указана кастомная иконка (см. опции ниже)
                hintContent: 'BSE - Бассейны и водоемы', // ! хинт, всплывающий при наведении мышкой
              },
            },
            {
              // Опции.
              // Иконка метки будет растягиваться под размер ее содержимого.
              // preset: 'islands#blackStretchyIcon', // ! актуально для текста внутри иконки (см. iconContent выше)
              // // Метку можно перемещать.
              // draggable: true,
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: placemarkIcon,
              // Размеры метки.
              iconImageSize: [50, 64],
              // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
              iconImageOffset: [10, 0],
            }
          );
          myMap.geoObjects.add(placemark);
        });
      });
    })
    .catch((error) => console.log('Ошибка загрузки Яндекс-карт', error));

  return el('.maps', [map]);
}
