const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const valorAleatorio = Math.floor(Math.random() * valores.length);

const carta = document.querySelector(".carta");

carta.innerHTML = valores [valorAleatorio];

const pintas = ["diamante", "corazon", "pica", "trebol"];
const pintaAleatoria = Math.floor(Math.random() * pintas.length);

carta.classList.add(pintas[pintaAleatoria]);