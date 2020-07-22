const primeiroElemento = (arrayOutString) => arrayOutString[0];
const letraMinuscula = (letra) => letra.toLowerCase();

new Promise(function (resolve) {
  resolve(['pna', 'pedro', 'isaac', 'dani', 'lucas']);
})
  .then(primeiroElemento)
  .then(primeiroElemento)
  .then(letraMinuscula)
  .then(console.log);
