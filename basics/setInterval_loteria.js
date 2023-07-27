let counter = 0;
let lottoNumbers = [];
console.log("LOTERíA");
console.log(".-.RÁPIDA SUERTA.-.");
const defineInterval = setInterval(() => {
  const randomNumber = Math.ceil(Math.random() * 100);
  const randomNumberToString = String(randomNumber);

  // Just terminal numbers... solo terminales, nada de triples
  if (randomNumber <= 99) {
    console.log(`${randomNumber}`);

    if (randomNumber == 6 || randomNumberToString.charAt(1) == 6)
      console.log(`se lee seis`);
    if (randomNumber == 9 || randomNumberToString.charAt(1) == 9)
      console.log(`se lee nueve`);
    if (randomNumber == 7) console.log(`¡${randomNumber} de la suerte!`);
    if (randomNumber == 69) console.log(`¡El número gozón ${randomNumber}!`);
    if (randomNumber == 22) console.log(`¡${randomNumber}! ¡Los dos paticos!`);

    counter += 1;
    lottoNumbers.push(randomNumber);
  }

  // 5 lotto numbers
  if (counter == 5) {
    console.log("Los resultados son:", lottoNumbers);
    clearInterval(defineInterval);
  }
}, 2000);
