const date = new Date();
const actualYear = date.getFullYear();

class Person {
  name;
  age;

  constructor(name, age) {
    (this.name = name), (this.age = age);
    this.birthDate = actualYear - age;
  }

  description() {
    return console.log(
      `My name is ${this.name}, and i'm ${this.age} years old, born in ${this.birthDate}.`
    );
  }
}

const nathan = new Person("Nathan", 27);
nathan.description();
