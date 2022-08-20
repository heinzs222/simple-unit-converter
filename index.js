/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const btnEl = document.querySelector("#convert-btn");
const inputEl = document.querySelector("#input-el");
const lengthEl = document.querySelector("#length-el");
const volumeEl = document.querySelector("#volume-el");
const massEl = document.querySelector("#mass-el");

btnEl.addEventListener("click", function () {
    let userInput = inputEl.value;
    lengthEl.textContent = `${Number(userInput)} meters = ${(
        Number(userInput) * 3.281
    ).toFixed(3)} feet | ${Number(userInput)} feet = ${(
        Number(userInput) / 3.281
    ).toFixed(3)} meters`;
    volumeEl.textContent = `${Number(userInput)} liters = ${(
        Number(userInput) * 0.264
    ).toFixed(3)} galons | ${Number(userInput)} galons = ${(
        Number(userInput) / 0.264
    ).toFixed(3)} liters`;
    massEl.textContent = `${Number(userInput)} kilos = ${(
        Number(userInput) * 2.204
    ).toFixed(3)} pounds | ${Number(userInput)} pounds = ${(
        Number(userInput) / 2.204
    ).toFixed(3)} kilos`;
});
