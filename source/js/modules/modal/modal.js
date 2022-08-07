import {addPhoneValidation, removePhoneValidation} from '../../modules/phone-validate/phone-validate';

const body = document.querySelector('.page__body');
const phoneButton = document.querySelector('.page-header__button');
const popUp = document.querySelector('.modal-container');
const popUpCloseButton = popUp.querySelector('.modal-container__button');
const phoneInput = popUp.querySelector('#user-phone-modal');
const isEscapeKey = (evt) => evt.key === 'Escape';

const initModal = () => {
  phoneButton.classList.remove('page-header__button--no-js');
  const onPopupEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeModal();
    }
  };

  const onOverlayClick = (evt) => {
    if (evt.target === popUp) {
      closeModal();
    }
  };

  const onHandleKeyTap = (evt) => {
    if (evt.keyCode === 9) {
      let focusable = popUp.querySelectorAll('input,button,select,textarea');
      if (focusable.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const shift = evt.shiftKey;
        if (shift) {
          if (evt.target === first) {
            last.focus();
            evt.preventDefault();
          }
        } else {
          if (evt.target === last) {
            first.focus();
            evt.preventDefault();
          }
        }
      }
    }
  };

  const openModal = () => {
    popUp.classList.remove('modal-container--close');
    popUp.classList.add('modal-container--open');
    popUpCloseButton.addEventListener('click', closeModal);
    popUp.addEventListener('click', onOverlayClick);
    document.addEventListener('keydown', onPopupEscKeydown);
    body.classList.add('page__body--fixed-position');
    popUp.querySelector('#user-name-modal').focus();
    body.addEventListener('keydown', onHandleKeyTap);
    addPhoneValidation(phoneInput);
  };

  const closeModal = () => {
    popUp.classList.remove('modal-container--open');
    popUp.classList.add('modal-container--close');
    popUpCloseButton.removeEventListener('click', closeModal);
    popUp.removeEventListener('click', onOverlayClick);
    document.removeEventListener('keydown', onPopupEscKeydown);
    body.classList.remove('page__body--fixed-position');
    body.removeEventListener('keydown', onHandleKeyTap);
    popUp.querySelector('#user-name-modal').blur();
    phoneButton.focus();
    removePhoneValidation(phoneInput);
  };

  phoneButton.addEventListener('click', openModal);
};

export {initModal};
