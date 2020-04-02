import 'swiper/css/swiper.css';

import './styles/index.css';
import './functions/directionModal';

import Swiper from 'swiper';

new Swiper('.container', {
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.swiper-pagination',
  },

  initialSlide: 1,
});

/** 
 * Naver Map
 */
const mapOptions = {
  useStyleMap: true,
  center: new naver.maps.LatLng(37.668253, 126.953348),
  zoom: 15,
};

const map = new naver.maps.Map('map', mapOptions);
new naver.maps.Marker({ map, position: { lat: 37.668253, lng: 126.953348 } });
