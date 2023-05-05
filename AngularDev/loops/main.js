//multi table
const number = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

//filter even numbers
const even = [];
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    even.push(i);
  }
}
console.log(`\n${even}`);
