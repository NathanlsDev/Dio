const fuelValue = 6.85;
const KMPerLiter = 10;
const KMDistance = 275;

const litersNeeded = KMDistance / KMPerLiter;
const amountSpent = litersNeeded * fuelValue;
const amountSpentFix = Number(amountSpent.toFixed(2));

console.log(
  `It takes $ ${amountSpentFix} dollars worth of fuel to travel ${KMDistance} Km away.`
);
