// qual a vantagem da composiçao de funçoes e do currying?
// porque nao passar todos os parametros de uma vez?

// RESPOSTA:
// ao escolher passar todos os parametros de uma vez nao é possivel
// ter versoes intermediarias da funçao e tornar o codigo mais flexivel
// -> com composiçao de funçoes é possivel criar versoes intermediarias

function composicao(...fns) {
  return function (valor) {
    return fns.reduce((acc, fn) => {
      return fn(acc);
    }, valor);
  };
}

function gritar(texto) {
  return texto.toUpperCase();
}

function enfatizar(texto) {
  return `${texto}!!!!!`;
}

function tornarLento(texto) {
  return texto.split('').join(' ');
}

const exagerado = composicao(gritar, enfatizar, tornarLento);
const umPoucoMenosExagerado = composicao(gritar, enfatizar);

const resultado = exagerado('pare');
const resultado2 = umPoucoMenosExagerado('cuidado com o buraco');

console.log(resultado);
console.log(resultado2);
