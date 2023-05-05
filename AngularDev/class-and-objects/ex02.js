class Person {
  name;
  weight;
  height;

  constructor(name, weight, height) {
    this.name = name;
    this.weight = weight;
    this.height = height;
  }

  imc() {
    const calcImc = this.weight / this.height ** 2;
    return Number(calcImc.toFixed(2));
  }

  imcClassification() {
    const calcImc = this.imc();

    if (calcImc <= 18.5) {
      return `${this.name}, your IMC is Underweight`;
    }
    if (calcImc >= 18.5 && calcImc <= 24.9) {
      return `${this.name}, your IMC is Normal weight`;
    }
    if (calcImc >= 25 && calcImc <= 29.9) {
      return `${this.name}, your IMC is Overweight`;
    }

    return `${this.name}, your IMC is obesity`;
  }
}

const citizen = new Person("Jhon", 75, 1.75);
console.log(citizen.imc());
console.log(citizen.imcClassification());
