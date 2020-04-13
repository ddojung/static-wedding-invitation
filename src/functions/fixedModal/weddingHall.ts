import { closeFixedContainer, openFixedContainer } from ".";

/**
 * Wedding Hall Map Modal
 */
const weddingHallContainer = document.querySelector<HTMLDivElement>('#wedding-hall-map-container');
const weddingHallOpenButton = document.querySelector<HTMLButtonElement>('#wedding-hall-open-button');
const weddingHallCloseButton = document.querySelector<HTMLButtonElement>('#wedding-hall-close-button');

export const initWeddingHallModal = () => {
  weddingHallOpenButton?.addEventListener('click', () => openFixedContainer(weddingHallContainer, weddingHallOpenButton));
  weddingHallCloseButton?.addEventListener('click', () => closeFixedContainer(weddingHallContainer));
};