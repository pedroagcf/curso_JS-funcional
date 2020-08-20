// desafio!
// criar um stream de numeros
// entre min e max com observable!

const { Observable, noop } = require('rxjs');

const entre = (min, max) => {
  if (min > max) [min, max] = [max, min];
  return new Observable((subscriber) => {
    Array(max - min)
      .fill()
      .map((_, i) => {
        subscriber.next(min + i);
      });

    // for (let i = min; i <= max; i++) {
    //   subscriber.next(i);
    // }

    subscriber.complete();
  });
};

// entre(a).subscribe()

// = Observable.create((subscriber) => {
//   subscriber.next(a);
//   subscriber.next(b);
// });

entre(5, 10).subscribe(
  (num) => console.log(`num = ${num}`),
  noop,
  () => console.log('Fim!')
);
