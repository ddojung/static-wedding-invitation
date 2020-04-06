import 'swiper/css/swiper.css';

import './styles/index.css';
import './functions/fixedContainerModal';
import './functions/noticeScrollGuide';
import './functions/weddingHallGuide';

import Swiper from 'swiper';

const swiper = new Swiper('.container', {
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.main-swiper-next',
    prevEl: '.main-swiper-prev',
  },
  initialSlide: 1,
});

if (swiper) {
  document.querySelector<HTMLDivElement>('.swiper-lazy-preloader-wrap')!.style.display = 'none';
}

const swiperButtonWrap = document.querySelector<HTMLDivElement>('.swiper-button-wrap');
const swiperNextButton = document.querySelector<HTMLDivElement>('.main-swiper-next');
const swiperPrevButton = document.querySelector<HTMLDivElement>('.main-swiper-prev');


if (swiperButtonWrap && swiperNextButton && swiperPrevButton) {
  swiperNextButton.addEventListener('click', () => {
    swiper.activeIndex === 2 ? (swiperButtonWrap.style.color = '#DDD') : (swiperButtonWrap.style.color = '#FFF');
  });
  swiperPrevButton.addEventListener('click', () => {
    swiper.activeIndex === 0 ? (swiperButtonWrap.style.color = '#BBB') : (swiperButtonWrap.style.color = '#FFF');

  });
}



/** 
 * Naver Map
 */
const mapOptions: naver.maps.MapOptions = {
  useStyleMap: true,
  center: new naver.maps.LatLng(37.668253, 126.953348),
  zoom: 15,
};
const map = new naver.maps.Map('map', mapOptions);

const markerOptions: naver.maps.MarkerOptions = {
  map,
  position: { lat: 37.668253, lng: 126.953348 },
  icon: {
    url: 'https://firebasestorage.googleapis.com/v0/b/wedding-invi.appspot.com/o/map-marker.svg?alt=media&token=dcd71850-1cd8-431e-9322-d9ba87ac948e',
    size: new naver.maps.Size(35, 35),
  }
};
new naver.maps.Marker(markerOptions);
