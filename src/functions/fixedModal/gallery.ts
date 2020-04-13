import { closeFixedContainer, openFixedContainer } from ".";

/**
 * Gallery Image Swiper Modal
 */
const galleryContainer = document.querySelector<HTMLDivElement>('#gallery-image-container');
const galleryImages = document.querySelectorAll<HTMLImageElement>('.gallery-img');
const image = document.querySelector<HTMLImageElement>('#gallery-image');

export const initGalleryModal = () => {
  galleryContainer?.addEventListener('click', () => closeFixedContainer(galleryContainer));
  image?.addEventListener('click', (e) => e.stopPropagation());

  for (let index = 0; index < galleryImages.length; index++) {
    galleryImages.item(index).addEventListener('click', () => {
      image!.src = galleryImages.item(index).src;
      openFixedContainer(galleryContainer, galleryImages.item(index));
    });
  }
};
