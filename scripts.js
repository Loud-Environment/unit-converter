const pLength = document.getElementById("p-length");
const pVolume = document.getElementById("p-volume");
const pMass = document.getElementById("p-mass");
const inputEl = document.getElementById("input-el");
const btn = document.getElementById("btn-el");

function render(userValue) {
  const calcFeet = (userValue * 3.281).toFixed(3);
  const calcMeters = (userValue / 3.281).toFixed(3);
  const calcLiters = (userValue * 3.785).toFixed(3);
  const calcGallons = (userValue / 3.785).toFixed(3);
  const calcPounds = (userValue * 2.205).toFixed(3);
  const calcKilos = (userValue / 2.205).toFixed(3);
  // Text template: 20 meters = 65.616 feet | 20 feet = 6.096 meters
  if (userValue === 1) {
    pLength.textContent = `${userValue} meter = ${calcFeet} feet | ${userValue} foot = ${calcMeters} meters`;
  } else {
    pLength.textContent = `${userValue} meters = ${calcFeet} feet | ${userValue} feet = ${calcMeters} meters`;
  }
  // Text template: 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
  if (userValue === 1) {
    pVolume.textContent = `${userValue} liter = ${calcGallons} gallons | ${userValue} gallon = ${calcLiters} liters`;
  } else {
    pVolume.textContent = `${userValue} liters = ${calcGallons} gallons | ${userValue} gallons = ${calcLiters} liters`;
  }
  // Text template: 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
  if (userValue === 1) {
    pMass.textContent = `${userValue} kilo = ${calcPounds} pounds | ${userValue} pound = ${calcKilos} kilos`;
  } else {
    pMass.textContent = `${userValue} kilos = ${calcPounds} pounds | ${userValue} pounds = ${calcKilos} kilos`;
  }
}

btn.addEventListener("click", function () {
  const userInput = inputEl.value;
  const value = Number(userInput);

  if (userInput === "") {
    alert("Please enter a number");
    return;
  }

  if (Number.isNaN(value)) {
    alert("Invalid number");
    return;
  }

  render(value);
});
