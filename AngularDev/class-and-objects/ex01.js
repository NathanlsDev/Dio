class Car {
  brand;
  color;
  averageConsumptionKm;

  constructor(brand, color, averageConsumptionKm) {
    this.brand = brand;
    this.color = color;
    this.averageConsumptionKm = averageConsumptionKm;
  }

  costPerKM(distance, fuelPrice) {
    const fuelNeeded = distance * this.averageConsumptionKm;
    const totalCost = fuelNeeded * fuelPrice;

    return console.log(`${totalCost}\n`);
  }
}

const passat = new Car("Volkswagen", "red", 1 / 12);
console.log(passat);
passat.costPerKM(70, 5);

const palio = new Car("Fiat", "blue", 1 / 9);
console.log(palio);
palio.costPerKM(220, 7.5)
