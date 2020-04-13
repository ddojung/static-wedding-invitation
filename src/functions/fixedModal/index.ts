import { initDirectionModal } from "./direction";
import { initGalleryModal } from "./gallery";
import { initWeddingHallModal } from "./weddingHall";

export const openFixedContainer = (container: HTMLDivElement | null, openButton: HTMLElement | null) => {
  if (!container || !openButton) {
    return;
  }
  container.classList.add('visible-fixed-container');
  setTimeout(() => {
    container.classList.add('opacity-fixed-container');
  });
};
export const closeFixedContainer = (container: HTMLDivElement | null) => {
  if (!container) {
    return;
  }
  container.style.overflow = 'hidden';

  container.classList.remove('opacity-fixed-container');
  setTimeout(() => { // transition에 의해 500ms 후 opacity가 0이되면 none 처리
    container.classList.remove('visible-fixed-container');
  }, 500);
};

export { initGalleryModal, initWeddingHallModal, initDirectionModal };