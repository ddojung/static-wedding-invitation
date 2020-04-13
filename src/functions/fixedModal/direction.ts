/**
 * Direction Modal
 */

import { closeFixedContainer, openFixedContainer } from ".";

const directionContainer = document.querySelector<HTMLDivElement>('#direction-container');
const directionOpenButton = document.querySelector<HTMLButtonElement>('#direction-open-button');
const directionCloseButton = document.querySelector<HTMLButtonElement>('#direction-close-button');

export const initDirectionModal = () => {
  directionOpenButton?.addEventListener('click', () => openFixedContainer(directionContainer, directionOpenButton));
  directionCloseButton?.addEventListener('click', () => closeFixedContainer(directionContainer));
};