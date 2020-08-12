const readline = require('readline');

function obterResposta(pergunta) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(pergunta, (resp) => {
      resolve(resp);
      rl.close();
    });
  });
}

// obterResposta('esse e um teste?').then(console.log);

//observer
function namorada() {
  setTimeout(() => {
    console.log('N: Apagar as luzes...');
    console.log('N: Pedir silencios... ');
    console.log('N: Surpresa!!!!!');
  }, 2000);
}

// observer
function sindico(evento) {
  setTimeout(() => {
    console.log('S: Monitorando o barulho!!!');
    console.log(`S: evento -> ${evento.resp}`);
    console.log(`S: evento -> ${evento.data}`);
  }, 1000);
}

// subject
async function porteiro(interessados) {
  while (true) {
    const resp = await obterResposta('O namorado chegou? (s/N/q)');
    if (resp.toLowerCase() === 's') {
      (interessados || []).forEach((obs) => obs({ resp, data: Date.now() }));
    } else if (resp.toLowerCase() === 'q') {
      break;
    }
    console.log(resp);
  }
}

/*
    chamada da funcao -> registra os dois observadores!
    Os observadores sao: namorada e sindico
    O subject é o porteiro! 
*/

porteiro([namorada, sindico]);
