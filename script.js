let res = document.getElementById("resultado");
let numeroSecreto = parseInt(Math.random() * 11);
let tentativas = 3;
let resTent = document.getElementById("tentativas");
let button = document.getElementById("button");

function Chutar() {
  let valor = parseInt(document.getElementById("valor").value);

  if (numeroSecreto == valor) {
    res.innerHTML = "Acertou!";
  } else if (valor < 0 || valor > 10) {
    res.innerHTML = "Digite um numero de 0 a 10";
  } else {
    res.innerHTML = "Errou";
    tentativas--;
    resTent.innerHTML = tentativas;
  }

  if (numeroSecreto < valor) {
    res.innerHTML += " tente um numero menor.";
  } else if (numeroSecreto > valor) {
    res.innerHTML += " tente um numero maior.";
  }

  if (tentativas == 0) {
    res.innerHTML = `Errou o numero correto era ${numeroSecreto}`;
    button.disabled = true;
  }
}