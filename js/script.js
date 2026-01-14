// Creo il countdown
const countdown = document.getElementById("countdown");

let timeLeft = 6;

const countdownInterval = setInterval(function () {
  countdown.innerText = --timeLeft;
  if (countdown.innerText === "0") clearInterval(countdownInterval);
}, 1000);

// Funzione per numero randomico
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Creo la lista dei numeri randomici
const numbersList = document.getElementById("numbers-list");

numbersList.innerHTML = `
<li id="number-1">${randomNumber(1, 50)}</li>
<li id="number-2">${randomNumber(1, 50)}</li>
<li id="number-3">${randomNumber(1, 50)}</li>
<li id="number-4">${randomNumber(1, 50)}</li>
<li id="number-5">${randomNumber(1, 50)}</li>
`;

const number1 = document.getElementById("number-1");
const number2 = document.getElementById("number-2");
const number3 = document.getElementById("number-3");
const number4 = document.getElementById("number-4");
const number5 = document.getElementById("number-5");

const randomNumbersArray = [
  number1.innerText,
  number2.innerText,
  number3.innerText,
  number4.innerText,
  number5.innerText,
];

console.log(randomNumbersArray);

const form = document.getElementById("answers-form");
const instructions = document.getElementById("instructions");
const message = document.getElementById("message");

// Creo il timeOut e faccio apparire il form
setTimeout(() => {
  countdown.style.display = "none";
  form.classList = "d-block";
  numbersList.innerHTML = "";
  instructions.innerText = "Scrivi i numeri nei riquadri, non importa in che ordine!";
}, 7000);

// Controllo i numeri inseriti
const formInput1 = document.getElementById("form-input-1");
const formInput2 = document.getElementById("form-input-2");
const formInput3 = document.getElementById("form-input-3");
const formInput4 = document.getElementById("form-input-4");
const formInput5 = document.getElementById("form-input-5");

const formInputValues = [];

const submitButton = document.querySelector(".btn");

let outputMsg;

let counter = 0;

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  formInputValues.push(
    formInput1.value,
    formInput2.value,
    formInput3.value,
    formInput4.value,
    formInput5.value
  );
  console.log(formInputValues);
  submitButton.disabled = true;
  for (let i = 0; i < formInputValues.length; i++) {
    const currentInputValue = formInputValues[i];
    if (randomNumbersArray.includes(currentInputValue)) {
      counter++;
      outputMsg = `Hai indovinato ${counter} numeri`;
      message.innerText = outputMsg;
    }
  }
  if (outputMsg == undefined) {
    outputMsg = "Non hai indovinato nessun numero";
    message.innerText = outputMsg;
  }
  console.log(outputMsg);
});
