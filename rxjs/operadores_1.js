//Os dois tipos...

//1. Operadores de criaçao
const { of } = require('rxjs');

//2. Operadores Encadeaveis (pipeable Op)
const { last, map } = require('rxjs/operators');

const obs = of(1, 2, 'ana', false, 'ultimo');

//ou: from([1, 2, 'ana', false, 'ultimo'])

obs
  .pipe(
    last(),
    map((v) => v[0]),
    map((v) => `A letra encontrada foi: ${v}`)
  )
  .subscribe((valor) => {
    console.log(valor);
  });
