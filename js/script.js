// Recupero gli elementi del DOM
const countdown = document.getElementById("countdown");
const instructions = document.getElementById("instructions");
const randomNumbersList = document.getElementById("numbers-list");
const answersForm = document.getElementById("answers-form");
const message = document.getElementById("message");
const submitBtn = document.querySelector(".btn");

// Creo il countdown
let timeLeft = 31;
const intervalId = setInterval(function () {
  countdown.innerText = --timeLeft;
  // A timeLeft <= 0:
  if (timeLeft <= 0) {
    // il countdown si interrompe e sparisce,
    clearInterval(intervalId);
    countdown.style.display = "none";
    // cambiano le instructions, scompaiono i numeri e appaiono gli input
    instructions.innerText = "Inserisci i numeri nei riquadri, non importa l'ordine!";
    randomNumbersList.classList = "d-none";
    answersForm.classList = "d-block";
  }
}, 1000);

// Funzione per numero randomico
const randomNumberGenerator = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Array dei numeri usciti
const randomNumbersArray = [];

// Finchè l'array non arriva a 5 elementi:
while (randomNumbersArray.length < 5) {
  // genero il numero randomico,
  const randomNumber = randomNumberGenerator(1, 50);
  // controllo se il numero non è ripetuto,
  if (!randomNumbersArray.includes(randomNumber)) {
    // e lo inserisco nell'array
    randomNumbersArray.push(randomNumber);
    const listItem = document.createElement("li");
    listItem.innerText = randomNumber;
    randomNumbersList.appendChild(listItem);
  }
}

// Seleziono tutti gli input
const inputs = document.querySelectorAll(".form-control");

// Array dei numeri inseriti negli input
let formInputList = [];

// Contatore di numeri indovinati
let guessCounter = 0;

// Verifica per numero
let duplicatedNumber = 0;

// Al click del submit:
answersForm.addEventListener("submit", function (event) {
  // evito che si ricarichi la pagina,
  event.preventDefault();
  // inserisco gli input nell'array,
  for (let i = 0; i < inputs.length; i++) {
    const currentInputValue = inputs[i].value;
    // se il numero è già presente nell'array viene segnalato in un contatore apposito
    if (formInputList.includes(currentInputValue)) {
      ++duplicatedNumber;
    }
    // altrimenti viene inserito nell'array
    else {
      formInputList.push(currentInputValue);
    }
  }

  // Comparazione dei numeri
  for (let i = 0; i < formInputList.length; i++) {
    const currentInputNumber = formInputList[i];
    for (let i = 0; i < randomNumbersArray.length; i++) {
      const currentRandomNumber = randomNumbersArray[i];
      // Se il numero nell'input è uguale a uno dei numeri random aggiungo +1 al guessCounter
      if (currentInputNumber == currentRandomNumber) ++guessCounter;
    }
  }

  // Se il contatore dei duplicati è salito:
  if (duplicatedNumber > 0) {
    message.innerText = "Hai inserito più volte lo stesso numero!";
    // svuoto l'array, e azzero il guessCounter
    formInputList = [];
    guessCounter = 0;
    // 1 secondo dopo azzero il conteggio dei duplicati
    const intervalId = setInterval(function () {
      duplicatedNumber = 0;
      if (duplicatedNumber === 0) clearInterval(intervalId);
    }, 1000);
  }
  // Messaggio di risultato in base al valore del guessCounter:
  if (duplicatedNumber === 0) {
    if (guessCounter === 0) {
      message.innerText = "Non hai indovinato nessun numero!";
    } else if (guessCounter === 1) {
      message.innerText = `Hai indovinato 1 numero!`;
      message.classList = "text-warning text-center";
    } else if (guessCounter > 1) {
      message.innerText = `Hai indovinato ${guessCounter} numeri!`;
      message.classList = "text-success text-center";
    }
  }
});
