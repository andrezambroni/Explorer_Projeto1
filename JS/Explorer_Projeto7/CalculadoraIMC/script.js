const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

const modalWrapper = document.querySelector('.modal-wrapper')
const modalMenssage = document.querySelector('.modal .tittle span')
const modalBtnClose = document.querySelector('.modal button.close')

modalMenssage.innerText = 'qualquer coisa'
modalWrapper.classList.add('open')

form.onsubmit = (event) => {
  event.preventDefault();
  const weight = inputWeight.value;
  const height = inputHeight.value;

  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`

  modalMenssage.innerText=message

  modalWrapper.classList.add('open')

  
}

modalBtnClose.onClick = () => {
    modalWrapper.classList.remove('open')
}

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

