const inputNumbers = [5, 50, 10, 98, 23];
let i = 0;

function gets() {
  const number = inputNumbers[i];
  i++;
  return number;
}

function print(text) {
  console.log(text);
}

module.exports = { gets, print };
