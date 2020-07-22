const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

const myPromise = (caminho) => {
  return new Promise((resolve) => {
    fs.readFile(caminho, (_, conteudo) => {
      resolve(conteudo.toString());
    });
    console.log('depois de ler');
  });
};

myPromise(caminho).then((conteudo) => console.log(conteudo));
//   .then((linha) => linha.join(','))
//   .then((conteudo) => `O valor final é: ${conteudo}`)
//   .then(console.log);
