


const creditText = document.querySelector('#creditText');
const creditRange = document.querySelector('#creditRange');
const firstContributionText = document.querySelector('#firstContributionText');

const formatterNumber = new Intl.NumberFormat('ru');

// focus->keydown->keypress->keyup->input

function inputHandler(event) {

  let number = '';

  for (const letter of this.value) {
    if ('0123456789'.includes(letter)) {
      number += letter;
    }
  }

  number = formatterNumber.format(number);

  this.value = number;
};

creditText.addEventListener('input', inputHandler);
