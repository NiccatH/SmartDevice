const getInputNumbersValue = (input) => input.value.replace(/\D/g, '');

const onPhonePaste = (evt) => {
  const input = evt.target;
  let inputNumbersValue = getInputNumbersValue(input);
  const pasted = evt.clipboardData || window.clipboardData;
  if (pasted) {
    let pastedText = pasted.getData('Text');
    if (/\D/g.test(pastedText)) {
      input.value = inputNumbersValue;
      return;
    }
  }
};

const onPhoneInput = (evt) => {
  const input = evt.target;
  let inputNumbersValue = getInputNumbersValue(input);
  const selectionStart = input.selectionStart;
  let formattedInputValue = '';
  if (!inputNumbersValue) {
    input.value = '';
  }


  if (input.value.length !== selectionStart) {
    if (evt.data && /\D/g.test(evt.data)) {
      input.value = inputNumbersValue;
    }
    return;
  }

  if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
    if (inputNumbersValue[0] === '9') {
      inputNumbersValue = '7' + inputNumbersValue;
    }
    const firstSymbols = '+' + '7';
    formattedInputValue = input.value = firstSymbols;
    if (inputNumbersValue.length > 1) {
      formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
    }
    if (inputNumbersValue.length >= 5) {
      formattedInputValue += ')' + inputNumbersValue.substring(4, 7);
    }
    if (inputNumbersValue.length >= 8) {
      formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
    }
    if (inputNumbersValue.length >= 10) {
      formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
    }
  } else {
    formattedInputValue = inputNumbersValue.substring(0, 16);
  }
  input.value = formattedInputValue;
};

const onPhoneKeyDown = function (evt) {
  const input = evt.target;
  if (evt.keyCode === 8 && evt.target.value.length === 1) {
    input.value = '';
  }
};

const addPhoneValidation = (phoneInput) => {
  phoneInput.setAttribute('maxLength', '16');
  phoneInput.addEventListener('keydown', onPhoneKeyDown);
  phoneInput.addEventListener('input', onPhoneInput, false);
  phoneInput.addEventListener('paste', onPhonePaste, false);
};

const removePhoneValidation = (phoneInput) => {
  phoneInput.removeEventListener('keydown', onPhoneKeyDown);
  phoneInput.removeEventListener('input', onPhoneInput, false);
  phoneInput.removeEventListener('paste', onPhonePaste, false);
};

export {addPhoneValidation, removePhoneValidation};
