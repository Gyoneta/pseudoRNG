let try1 = false;
let try2 = false;
let try3 = false;

function generateNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function guess() {
  let inputNumber = parseInt(document.querySelector("#valor").value, 10);
  let number = generateNumber(0, 10);
  console.log(number);
  if (number == inputNumber)
    document.querySelector("#resultado").innerHTML = "voce ganhou!";
  else if (inputNumber > 10 || inputNumber < 0) {
    document.querySelector(
      "#resultado"
    ).innerHTML = `você digiout ${inputNumber}! , favor digitar um numero entre 0 e 10`;
  } else if (inputNumber != number && try1 == false) {
    document.querySelector("#resultado").innerHTML = "errou a primeira!";
    try1 = true;
  } else if (inputNumber != number && try2 == false) {
    document.querySelector("#resultado").innerHTML = "errou a segunda!";
    try2 = true;
  } else if (inputNumber != number && try3 == false) {
    document.querySelector("#resultado").innerHTML = "errou a terceira!";
    try3 = true;
  } else if (inputNumber != number && try3 == true) {
    document.querySelector("#resultado").innerHTML =
      "sentou na jabiraca kakakaka";
  }
}

/* div com imagem se ganhar + refresh da pagina (pq ainda é possível jogar + caso ganhe e try1/2/3 atribuir true e perder) ou quando ganhar atribuir try1/2/3 = false...? sla */
// apesar de try1/2/3 são 4 tentativas
