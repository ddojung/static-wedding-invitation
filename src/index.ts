import 'swiper/css/swiper.css';

import './index.css';
import './main.css';
import './notice.css';

import Swiper from 'swiper';

const fixedContainer = document.querySelector<HTMLDivElement>('.fixed-container');
const directionOpenButton = document.querySelector<HTMLButtonElement>('#directionOpenButton');
const directionCloseButton = document.querySelector<HTMLButtonElement>('#directionCloseButton');

const openFixedContainer = () => {
  if (!fixedContainer || !directionOpenButton) {
    return;
  }
  fixedContainer.style.display = 'block';
  setTimeout(() => {
    fixedContainer.style.opacity = '1';
  });
};
const closeFixedContainer = () => {
  if (!fixedContainer || !directionOpenButton) {
    return;
  }
  fixedContainer.style.opacity = '0';
  setTimeout(() => { // transition에 의해 1s 후 opacity가 0이되면 none 처리
    fixedContainer.style.display = 'none';
  }, 1000);
};

document.body.onload = () => {
  new Swiper('.container', {
    direction: 'horizontal',
    loop: false,
    pagination: {
      el: '.swiper-pagination',
    },

    initialSlide: 1,
  });

  directionOpenButton?.addEventListener('click', openFixedContainer);
  directionCloseButton?.addEventListener('click', closeFixedContainer);
};


document.body.onclose = () => {
  directionOpenButton?.removeEventListener('click', openFixedContainer);
};