/*
  Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
  Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.
 */

const { gets, print } = require("./aux_functions");

const length = gets();
let greaterNumberFound = 0;

for (let i = 0; i < length; i++) {
  const entryNumbers = gets();
  if (entryNumbers > greaterNumberFound) {
    greaterNumberFound = entryNumbers;
  }
}
print(greaterNumberFound);
