/**
 * documentation
 * comment
 * style
 *
 *
 * variables
 *
 * let variableName = value; // mutable
 * const variableName = value; // immutable
 *
 */

let numberOne = 5;
let numberTwo = 2.5;
const season = "Autumn"

// simple comment

/*
console.log("first row")
console.log("second row")
console.log("third row")

 */

console.log(numberOne)
console.log(numberTwo)
console.log(season)

 // Tund 9/21/2022

let aasta = 2016;
let president = "Kersti Kaljulaid"
let lauseKeskosa = ". aastal valiti Eesti presidentiks "
let lause = aasta + lauseKeskosa + president

console.log(lause)

// kasutaja sisend
let astmeAlus = Number(prompt("Sisestage astme alus: "));
let astendaja = Number(prompt("Sisestage astendaja: "));

// arvutame tulemuse
let tulemus = Math.pow(astmeAlus, astendaja)

console.log(tulemus)