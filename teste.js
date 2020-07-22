//estudando callbacks

const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

//forma assincrona
console.log('inicio');
fs.readFile(caminho, {}, (_, conteudo) => {
  console.log(conteudo.toString());
});
console.log('fim');

//forma sincrona

console.log('inicio');
const conteudo = fs.readFileSync(caminho);
console.log(conteudo.toString());
console.log('fim sync');
