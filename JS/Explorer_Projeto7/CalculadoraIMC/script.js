const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

const modalWrapper = document.querySelector('.modal-wrapper')
const modalMenssage = document.querySelector('.modal .tittle span')
const modalBtnClose = document.querySelector('.modal button.close')

form.onsubmit = (event) => {
  event.preventDefault();
  const weight = inputWeight.value;
  const height = inputHeight.value;

  const result = IMC(weight, height);
};

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

