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

function personComparison(person1, person2) {
  if (person1.age > person2.age) {
    return console.log(`${person1.name} is older than ${person2.name}.`);
  }
  if (person1.age < person2.age) {
    return console.log(`${person2.name} is older than ${person1.name}.`);
  }

  return console.log(`${person1.name} and ${person2.name} are the same age.`);
}

const nathan = new Person("Nathan", 28);
const flavia = new Person("Flavia", 28);

personComparison(nathan, flavia);
