function textoComTamanhoEntre(min) {
  return function (max) {
    return function (erro) {
      return function (texto) {
        // Lazy Evaluation
        const tamanho = (texto || '').trim().length;

        if (tamanho < min || tamanho > max) {
          throw erro;
        }
      };
    };
  };
}

//com o currying é possivel trabalhar com versoes
//parciais da funçao de forma que ha um ganho no reuso
const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255);
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome produto inválido!');

const p1 = { nome: 'A', preco: 14.99, desc: 0.25 };
forcarNomeProdutoValido(p1.nome);
