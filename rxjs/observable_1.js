const rx = require('rxjs');

const promise = new Promise((resolve) => {
  resolve('Promise é bem legal!');
});

promise.then(console.log);

const obs = new rx.Observable((subscriber) => {
  subscriber.next('observer');
  subscriber.next('é');
  subscriber.next('bem');
  setTimeout(() => {
    subscriber.next('legal');
    subscriber.complete();
    subscriber.next('nao vai mostrar!');
  }, 1000);
});

obs.subscribe(console.log);
obs.subscribe((texto) => console.log(texto.toUpperCase()));
