const form = document.querySelector('form');

const eField = form.querySelector('.email');
const eInput = eField.querySelector('input');

const pField = form.querySelector('.password');
const pInput = pField.querySelector('input');

form.onsubmit = (e) => {
  e.preventDefault();
  if (eInput.value === '') {
    eField.classList.add('shake', 'error');
  } else {
    checkEamil();
  }

  if (pInput.value === '') {
    pField.classList.add('shake', 'error');
  }

  setTimeout(() => {
    eField.classList.remove('shake');
    pField.classList.remove('shake');
  }, 500);

  eInput.onkeyup = () => {
    checkEamil();
  };

  function checkEamil() {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!eInput.value.match(pattern)) {
      eField.classList.add('error');
      let errorTxt = eField.querySelector('.error-txt');
      errorTxt.innerText =
        eInput.value !== ''
          ? 'Enter a valid email address'
          : "Email can't be blank";
    } else {
      eField.classList.remove('error');
    }
  }

  pInput.onkeyup = () => {
    if (!pInput.value === '') {
      pField.classList.add('error');
    } else {
      pField.classList.remove('error');
    }
  };

  if (
    !eField.classList.contains('error') &&
    !pField.classList.contains('error')
  ) {
    window.location.href = '#';
  }
};
