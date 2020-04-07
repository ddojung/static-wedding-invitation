export const noticeContainer = document.querySelector<HTMLDivElement>('.notice-container');
const guideBox = document.querySelector<HTMLDivElement>('.notice-scroll-guide');


const showScrollGuide = () => {
  const hasReachEnd = !!noticeContainer && (noticeContainer.scrollHeight - noticeContainer.offsetHeight === noticeContainer.scrollTop);
  hasReachEnd ? guideBox?.classList.add('hide-notice-scroll-guide') : guideBox?.classList.remove('hide-notice-scroll-guide');
};

showScrollGuide();

noticeContainer?.addEventListener('scroll', showScrollGuide);
guideBox?.addEventListener('click', () => {
  if (noticeContainer) {
    noticeContainer.scrollTo({
      top: noticeContainer.scrollHeight - noticeContainer.offsetHeight,
      behavior: 'smooth'
    });
  }
});