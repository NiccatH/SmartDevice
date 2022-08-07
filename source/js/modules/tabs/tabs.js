const tabsButtons = document.querySelectorAll('.page-footer__tab');

const onTabsButtonClick = (evt) => {
  tabsButtons.forEach((elem) => {
    if (elem !== evt.target && elem.parentElement.classList.contains('page-footer__nav-block--active')) {
      elem.parentElement.classList.remove('page-footer__nav-block--active');
    }
  });
  evt.target.parentElement.classList.toggle('page-footer__nav-block--active');
};

const initTabs = () => {
  if (document.documentElement.clientWidth < 770) {
    tabsButtons.forEach((elem) => {
      elem.removeAttribute('disabled', 'disabled');
      elem.parentElement.classList.remove('page-footer__nav-block--no-js');
      elem.addEventListener('click', onTabsButtonClick);
    });
  } else {
    tabsButtons.forEach((elem) => {
      elem.setAttribute('disabled', 'disabled');
      elem.removeEventListener('click', onTabsButtonClick);
    });
  }
};

export {initTabs};
