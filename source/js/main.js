import {initShowMore} from './modules/show-more/show-more';
import {initModal} from './modules/modal/modal';
import {addPhoneValidation} from './modules/phone-validate/phone-validate';
import {initTabs} from './modules/tabs/tabs';

window.addEventListener('DOMContentLoaded', () => {
  initShowMore();
  addPhoneValidation(document.querySelector('#user-phone'));
  initTabs();
  window.addEventListener('resize', initTabs);

  window.addEventListener('load', () => {
    initModal();
  });
});
