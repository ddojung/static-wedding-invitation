const frontGround = document.querySelector<HTMLImageElement>('.wedding-hall-map-img.front');
const photozone = document.querySelector<HTMLDivElement>('.photozone');
const gallery = document.querySelector<HTMLDivElement>('.gallery1');
const brideRoom = document.querySelector<HTMLDivElement>('.bride-room');
const secondStage = document.querySelector<HTMLDivElement>('.second-stage');



const createToastEvent = (element: HTMLDivElement | null, message: string) => {
  element?.addEventListener('click', () => {
    console.log(message);
  }, true);
};

createToastEvent(photozone, '포토부스-사진 촬영 후 인화된 사진을 붙이고 방명록을 작성해주세요 (신랑,신부에게 하고싶은말)');
createToastEvent(gallery, '사진전시-신랑, 신부의 사진들을 구경하세요!');
createToastEvent(brideRoom, '신부 대기실');
createToastEvent(secondStage, '2부');