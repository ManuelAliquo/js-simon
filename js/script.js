// Creo la lista dei numeri randomici
const numberslist = document.getElementById("numbers-list");

// Funzione per numero randomico
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

numberslist.innerHTML = `
<li>${randomNumber(1, 50)}</li>
<li>${randomNumber(1, 50)}</li>
<li>${randomNumber(1, 50)}</li>
<li>${randomNumber(1, 50)}</li>
<li>${randomNumber(1, 50)}</li>
`;
