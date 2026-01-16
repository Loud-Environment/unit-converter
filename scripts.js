const pLength = document.getElementById("p-length");
const pVolume = document.getElementById("p-volume");
const pMass = document.getElementById("p-mass");
const inputEl = document.getElementById("input-el");
const btn = document.getElementById("btn-el");

btn.addEventListener("click", function () {
  const myValue = inputEl.value;
  const numberValue = Number(myValue);
  const calcFeet = (numberValue * 3.281).toFixed(3);
  const calcMeters = (numberValue / 3.281).toFixed(3);
  const calcLiters = (numberValue * 3.785).toFixed(3);
  const calcGallons = (numberValue / 3.785).toFixed(3);
  const calcPounds = (numberValue * 2.205).toFixed(3);
  const calcKilos = (numberValue / 2.205).toFixed(3);
  // 20 meters = 65.616 feet | 20 feet = 6.096 meters
  if (numberValue === 1) {
    pLength.textContent = `${numberValue} meter = ${calcFeet} feet | ${numberValue} foot = ${calcMeters} meters`;
  } else {
    pLength.textContent = `${numberValue} meters = ${calcFeet} feet | ${numberValue} feet = ${calcMeters} meters`;
  }
  // 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
  if (numberValue === 1) {
    pVolume.textContent = `${numberValue} liter = ${calcGallons} gallons | ${numberValue} gallon = ${calcLiters} meters`;
  } else {
    pVolume.textContent = `${numberValue} liters = ${calcGallons} gallons | ${numberValue} gallons = ${calcLiters} meters`;
  }
  //   20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
  if (numberValue === 1) {
    pMass.textContent = `${numberValue} kilo = ${calcPounds} pounds | ${numberValue} pound = ${calcKilos} kilos`;
  } else {
    pMass.textContent = `${numberValue} kilos = ${calcPounds} pounds | ${numberValue} pounds = ${calcKilos} kilos`;
  }
});
