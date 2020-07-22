const carrinho = [
  { nome: 'rafa', qtd: 10, preco: 2 },
  { nome: 'ben', qtd: 5, preco: 4 },
  { nome: 'jesse', qtd: 10, preco: 2 },
  { nome: 'lee', qtd: 5, preco: 4 },
];

const getFistLetter = (obj) => obj.nome[0];

const getPrecoAndQtd = (obj) => {
  return obj.qtd + obj.preco;
};

const newArr = carrinho.map(getFistLetter);
const vetor = carrinho.map(getPrecoAndQtd);

console.log(newArr);
console.log(vetor);
