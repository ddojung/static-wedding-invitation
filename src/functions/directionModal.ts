/**
 * Direction Modal
 */
const directionContainer = document.querySelector<HTMLDivElement>('.direction-container');
const directionOpenButton = document.querySelector<HTMLButtonElement>('#direction-open-button');
const directionCloseButton = document.querySelector<HTMLButtonElement>('#direction-close-button');

const openFixedContainer = () => {
  if (!directionContainer || !directionOpenButton) {
    return;
  }
  directionContainer.classList.add('visible-direction-container');
  setTimeout(() => {
    directionContainer.classList.add('opacity-direction-container');
  });
};
const closeFixedContainer = () => {
  if (!directionContainer || !directionOpenButton) {
    return;
  }
  directionContainer.style.overflow = 'hidden';

  directionContainer.classList.remove('opacity-direction-container');
  setTimeout(() => { // transition에 의해 1s 후 opacity가 0이되면 none 처리
    directionContainer.classList.remove('visible-direction-container');
  }, 1000);
};

directionOpenButton?.addEventListener('click', openFixedContainer);
directionCloseButton?.addEventListener('click', closeFixedContainer);
