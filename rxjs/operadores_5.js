const { of, Observable } = require('rxjs');

function primeiro() {
  return function (source) {
    return Observable.create((subscriber) => {
      source.subscribe({
        next(v) {
          subscriber.next(v);
          subscriber.complete();
        },
      });
    });
  };
}

function terminadoCom(parteFinal) {
  return function (source) {
    return Observable.create((subscriber) => {
      source.subscribe({
        next(value) {
          if (Array.isArray(value)) {
            subscriber.next(value.filter((el) => el.endsWith(parteFinal)));
          } else if (value.endsWith(parteFinal)) {
            subscriber.next(value);
          }
        },
        error(e) {
          subscriber.error(e);
        },
        complete() {
          subscriber.complete();
        },
      });
    });
  };
}

of(['Pedro Rocha', 'Maria Silva', 'Ana Silva'])
  .pipe(terminadoCom('Silva'))
  .subscribe(console.log);
