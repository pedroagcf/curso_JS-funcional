// closure e quando uma funçao lembra
// seu escopo lexico, mesmo quando a funçao
// e executada fora desse escopo lexico

const fora = require('./closure_escopo');

const x = 1000; // irrelevante! se nao entender olhe para a definicao acima
console.log(fora());
