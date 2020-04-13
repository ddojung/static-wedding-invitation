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

export const initWeddingHallGuide = () => {
  createToastEvent(photozone, '포토부스\n사진 촬영 후 인화된 사진을 붙이고 방명록을 작성해주세요.\n(신랑,신부에게 하고싶은말)');
  createToastEvent(gallery, '신랑, 신부의 사진을 구경하세요.');
  createToastEvent(brideRoom, '신부 대기실입니다.\n신부에게 인사해주세요!');
  createToastEvent(secondStage, '2부 진행 공간입니다.\n다양한 이벤트가 있으니 함께해주세요.');
};

