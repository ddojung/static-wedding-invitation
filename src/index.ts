import 'swiper/css/swiper.css';

import './styles/index.css';

import { initContentsSwiper } from './functions/contentsSwiper';
import { initDirectionModal, initGalleryModal, initWeddingHallModal } from './functions/fixedModal';
import { initNaverMap } from './functions/map';
import { initNoticeScrollGuide } from './functions/noticeScrollGuide';
import { initWeddingHallGuide } from './functions/weddingHallGuide';

initContentsSwiper();

initDirectionModal();
initWeddingHallModal();
initGalleryModal();

initNoticeScrollGuide();
initWeddingHallGuide();
initNaverMap();
