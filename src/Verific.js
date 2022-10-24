let matriz = [[], [], []];

function giraMatriz() {
  return matriz[0].map((val, index) =>
    matriz.map((row) => row[index]).reverse()
  );
}

function getTransversais() {
  return [
    matriz.map((el, index) => matriz[index][index]),
    matriz.map((el, index) => matriz[index][matriz.length - 1 - index])
  ];
}

export default function Verific(table) {
  matriz = table;

  let matriz2 = matriz;

  matriz2 = matriz2.concat(giraMatriz());

  matriz2 = matriz2.concat(getTransversais());

  const jogador1Ganhou = matriz2
    .map((arr) => arr.every((el) => el !== 0 && el % 2 === 0))
    .some((el) => el);
  const jogador2Ganhou = matriz2
    .map((arr) => arr.every((el) => el !== 0 && el % 2 !== 0))
    .some((el) => el);

  if (jogador1Ganhou || jogador2Ganhou) {
    return true;
  }
}
