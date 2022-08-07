const aboutContent = document.querySelector('.about__content-wrapper');
const aboutPargraphs = aboutContent.querySelectorAll('[data-about]');
const showMoreButton = aboutContent.querySelector('[data-about-button]');

const initShowMore = () => {
  aboutPargraphs.forEach((elem) => {
    elem.dataset.about = '';
  });
  showMoreButton.dataset.aboutButton = '';

  const onShowMoreButtonClick = () => {
    if (showMoreButton.textContent === 'Подробнее') {
      showMoreButton.textContent = 'Свернуть';
    } else {
      showMoreButton.textContent = 'Подробнее';
    }
    aboutPargraphs.forEach((elem) => {
      elem.classList.toggle('is-full');
    });
  };

  showMoreButton.addEventListener('click', onShowMoreButtonClick);
};

export {initShowMore};
