// funcoes que operam em outras funçoes
// tomando-as como argumentos ou retornando-as,
// sao chamadas de higher order functions

function executar(fn, ...params) {
  return function (textoInicial) {
    return `${textoInicial} ${fn(...params)} :)`;
  };
}

function somar(a, b, c) {
  return a + b + c;
}

function multiplicar(a, b) {
  return a * b;
}

const r1 = executar(multiplicar, 4, 5, 6)('toma seu resultado');
console.log(r1);
