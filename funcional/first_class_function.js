//Diz-se que uma linguagem de programaçao possui
// funçoes de primeira classe quando funçoes nessa
// linguagem sao tratadas como qualquer outra variavel

// exemplo

function ordernarArray(array) {
  return [...array].sort();
}
const nums = [3, 2, 6, 4, 7, 3, 7, 9, 3, 2];
const numsOrdenados = ordernarArray(nums);

console.log(nums, numsOrdenados);
