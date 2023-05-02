const gasValue = 6.85;
const ethanolValue = 5.79;
const KMPerLiter = 10;
const KMDistance = 275;

const fuelType = "ethanol"; //change type of fuel here! ethanol/gas
const litersNeeded = KMDistance / KMPerLiter;

function fuelConsumption() {
  if (fuelType === "gas") {
    const fuelValue = gasValue;
    const amount = amountSpent(fuelValue);
    return outputMSG(amount);
  }

  const fuelValue = ethanolValue;
  const amount = amountSpent(fuelValue);
  return outputMSG(amount);
}

const amountSpent = (fuelValue) => {
  const amountSpent = litersNeeded * fuelValue;
  const amountSpentFix = Number(amountSpent.toFixed(2));

  return amountSpentFix;
};

const outputMSG = (amountSpentFix) => {
  console.log(
    `It takes $ ${amountSpentFix} dollars worth of fuel to travel ${KMDistance} Km away.`
  );
};

fuelConsumption();
