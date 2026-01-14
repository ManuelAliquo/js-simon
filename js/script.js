// Creo il countdown
const countdown = document.getElementById("countdown");

let timeLeft = 6;

const countdownInterval = setInterval(function () {
  countdown.innerText = --timeLeft;
  if (countdown.innerText === "0") clearInterval(countdownInterval);
}, 1000);

// Creo la lista dei numeri randomici
const numbersList = document.getElementById("numbers-list");

// Funzione per numero randomico
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

numbersList.innerHTML = `
<li>${randomNumber(1, 50)}</li>
<li>${randomNumber(1, 50)}</li>
<li>${randomNumber(1, 50)}</li>
<li>${randomNumber(1, 50)}</li>
<li>${randomNumber(1, 50)}</li>
`;

// Creo il timeOut
setTimeout(function () {
  numbersList.innerHTML = "";
}, 7000);
