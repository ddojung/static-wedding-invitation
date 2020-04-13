import Swiper from "swiper";

import { noticeContainer } from "./noticeScrollGuide";

export const initContentsSwiper = () => {
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

  swiper.on('slideChange', () => {
    if (!swiperButtonWrap || !swiperNextButton || !swiperPrevButton) {
      return;
    }

    if (swiper.activeIndex === 2) {
      noticeContainer?.scrollTo(0, 0);
      swiperButtonWrap.style.color = '#DDD';

      return;
    }
    if (swiper.activeIndex === 0) {
      swiperButtonWrap.style.color = '#BBB';

      return;
    }

    swiperButtonWrap.style.color = '#FFF';
  });

};