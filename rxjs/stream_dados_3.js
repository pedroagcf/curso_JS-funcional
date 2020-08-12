const rx = require('rxjs');

const gerarNumeros = rx.interval(500);

const sub1 = gerarNumeros.subscribe((num) => {
  console.log(`sub1: ${Math.pow(2, num)}`);
});

const sub2 = gerarNumeros.subscribe(console.log);

setTimeout(() => sub1.unsubscribe(), 8000);
setTimeout(() => sub2.unsubscribe(), 5000);

rx.from([1, 2, 3]).subscribe(console.log);
