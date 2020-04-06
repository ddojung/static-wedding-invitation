
const openFixedContainer = (container: HTMLDivElement | null, openButton: HTMLButtonElement | null) => {
  if (!container || !openButton) {
    return;
  }
  container.classList.add('visible-fixed-container');
  setTimeout(() => {
    container.classList.add('opacity-fixed-container');
  });
};
const closeFixedContainer = (container: HTMLDivElement | null) => {
  if (!container) {
    return;
  }
  container.style.overflow = 'hidden';

  container.classList.remove('opacity-fixed-container');
  setTimeout(() => { // transition에 의해 500ms 후 opacity가 0이되면 none 처리
    container.classList.remove('visible-fixed-container');
  }, 500);
};


/**
 * Direction Modal
 */
const directionContainer = document.querySelector<HTMLDivElement>('#direction-container');
const directionOpenButton = document.querySelector<HTMLButtonElement>('#direction-open-button');
const directionCloseButton = document.querySelector<HTMLButtonElement>('#direction-close-button');

directionOpenButton?.addEventListener('click', () => openFixedContainer(directionContainer, directionOpenButton));
directionCloseButton?.addEventListener('click', () => closeFixedContainer(directionContainer));

/**
 * Wedding Hall Map Modal
 */
const weddingHallContainer = document.querySelector<HTMLDivElement>('#wedding-hall-map-container');
const weddingHallOpenButton = document.querySelector<HTMLButtonElement>('#wedding-hall-open-button');
const weddingHallCloseButton = document.querySelector<HTMLButtonElement>('#wedding-hall-close-button');

weddingHallOpenButton?.addEventListener('click', () => openFixedContainer(weddingHallContainer, weddingHallOpenButton));
weddingHallCloseButton?.addEventListener('click', () => closeFixedContainer(weddingHallContainer));

