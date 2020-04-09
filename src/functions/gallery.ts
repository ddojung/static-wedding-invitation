import { closeFixedContainer, openFixedContainer } from "./fixedContainerModal";

/**
 * Gallery Image Swiper Modal
 */
const galleryContainer = document.querySelector<HTMLDivElement>('#wgallery-swiper-container');
const galleryCloseButton = document.querySelector<HTMLButtonElement>('#gallery-close-button');
const galleryImages = document.querySelectorAll<HTMLImageElement>('.gallery-img');

galleryCloseButton?.addEventListener('click', () => closeFixedContainer(galleryContainer));

for (let index = 0; index < galleryImages.length; index++) {
  galleryImages.item(index).addEventListener('click', () => {
    openFixedContainer(galleryContainer, galleryImages.item(index));
  });
}