import 'swiper/css/swiper.css';

import './index.css';
import './main.css';
import './notice.css';

import Swiper from 'swiper';

const CURRENT_LOCATION = {
  'left': 0,
  'middle': 1,
  'right': 2
};

let current = CURRENT_LOCATION.middle;
let touchStartPoint = 0;
const clientWidth = document.body.clientWidth;

document.body.onload = () => {
  new Swiper('.container', {
    direction: 'horizontal',
    loop: false,
    pagination: {
      el: '.swiper-pagination',
    },

    initialSlide: 1,
  });
};
// document.body.ontouchstart = (event) => {
//   touchStartPoint = event.touches[0].screenX;
// };
// document.body.ontouchend = (event) => {
//   const moving = event.changedTouches[0].screenX - touchStartPoint;

//   if (moving < 0) {
//     current += 1;
//     document.body.style.transform = `translateX(${String(-(clientWidth * current))}px)`;
//   }
//   if (moving > 0) {
//     current -= 1;
//     document.body.style.transform = `translateX(${String(-(clientWidth * current))}px)`;
//   }
// };

// const initDocument = () => {
//   document.body.style.transform = `translateX(${String(-clientWidth)}px)`;
// };