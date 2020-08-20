const { Observable } = require('rxjs');

const obs = Observable.create((subscriber) => {
  subscriber.next('RxJS');
  subscriber.next('é');
  subscriber.next('bem');
  subscriber.next('poderoso');

  if (Math.random() > 0.5) {
    subscriber.complete();
  } else {
    subscriber.error('Que problema?!?');
  }
});

//como tratar um erro?
// para este metodo é possivel passar tres parametros
// obs.subscribe(
//   (valor) => console.log(`valor: ${valor}`),
//   (erro) => console.log(`Erro: ${erro}`), // outra opcao é importar o noop
//   () => console.log('Fim!')
// );

obs.subscribe({
  next(valor) {
    console.log(`valor ${valor}`);
  },
  complete() {
    console.log(`Fim!`);
  },
  error(msg) {
    console.log(`Erro: ${msg}`);
  },
});
