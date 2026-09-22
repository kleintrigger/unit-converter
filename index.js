/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputBox = document.getElementById("input-box");
const convertBtn = document.getElementById("convert-button");
const lengthContainer = document.getElementById("length-container");
const volumeContainer = document.getElementById("volume-container");
const massContainer = document.getElementById("mass-container")
const lengthResult = document.getElementById("length-result");
const volumeResult = document.getElementById("volume-result");
const massResult = document.getElementById("mass-result");

const feet = 3.281
  const gallon = 0.264
  const pound = 2.204
  
  

convertBtn.addEventListener("click", function() {
    
      let value = inputBox.value;
    let convertFeet = value * feet
let convertGallon = value * gallon
let convertPound = value * pound

let convertMeter = value / feet
let convertLiter = value / gallon
let convertKilo = value / pound

lengthResult.innerHTML = `<p>${value} meters = ${convertFeet.toFixed(3)} feet | ${value} feet = ${convertMeter.toFixed(3)} meters </p> `

    
    
    volumeResult.innerHTML = `<p>${value} liters = ${convertGallon.toFixed(3)} gallons | ${value} gallons = ${convertLiter.toFixed(3)} liters</p> `
    
  
  
    massResult.innerHTML = `<p>${value} Kilos = ${convertPound.toFixed(3)} Pounds | ${value} Pounds = ${convertKilo.toFixed(3)} Kilos</p> `
  
  
  inputBox.value= ""
})



