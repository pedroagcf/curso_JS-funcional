const carrinho = [
  { nome: 'san', qtd: 10, preco: 2, fragil: true },
  { nome: 'ben', qtd: 5, preco: 4, fragil: false },
  { nome: 'jesse', qtd: 10, preco: 2, fragil: true },
  { nome: 'ana', qtd: 5, preco: 4, fragil: false },
  { nome: 'max', qtd: 10, preco: 6, fragil: true },
  { nome: 'julie', qtd: 5, preco: 8, fragil: false },
];

// map, filter e reduce

// 1. elementos que tem fragil true
// 2. pegar qtd e preço -> total
// 3. media totais

const soma = (a, b) => a + b;
const media = (value, length) => value / length;

const fragilTrue = carrinho
  .filter((el) => el.fragil)
  .map((el) => el.qtd * el.preco);

const res = media(fragilTrue.reduce(soma, 0), fragilTrue.length);

console.log(res);
