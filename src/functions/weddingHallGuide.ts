const frontGround = document.querySelector<HTMLImageElement>('.wedding-hall-map-img.front');
const photozone = document.querySelector<HTMLDivElement>('.photozone');
const gallery = document.querySelector<HTMLDivElement>('.gallery1');
const brideRoom = document.querySelector<HTMLDivElement>('.bride-room');
const secondStage = document.querySelector<HTMLDivElement>('.second-stage');

const toastContainer = document.querySelector<HTMLDivElement>('.toast-container');
const toast = document.querySelector<HTMLDivElement>('.toast');

let removeToast: NodeJS.Timeout;

const floatToast = (message: string) => {
  if (!toast || !toastContainer) {
    return;
  }

  toast.innerText = message;
  toastContainer.classList.add('float-toast');

  removeToast = setTimeout(() => {
    toastContainer.classList.remove('float-toast');
  }, 3000);
};

const createToastEvent = (element: HTMLDivElement | null, message: string) => {
  element?.addEventListener('click', () => {
    toastContainer?.classList.remove('float-toast');
    clearTimeout(removeToast);

    setTimeout(() => {
      floatToast(message);
    }, 100);
  });
};

createToastEvent(photozone, '포토부스\n사진 촬영 후 인화된 사진을 붙이고 방명록을 작성해주세요.\n(신랑,신부에게 하고싶은말)');
createToastEvent(gallery, '사진전시\n신랑, 신부의 사진들을 구경하세요!');
createToastEvent(brideRoom, '신부 대기실');
createToastEvent(secondStage, '2부');
