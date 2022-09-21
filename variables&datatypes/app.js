// Andmete sisestamine
let userName = String(prompt("Sisestage nimi: "));
let lubatudKiirus = Number(prompt("Sisetage lubatud kiirus: "));
let tegelikKiirus = Number(prompt("Sisetage tegelik kiirus: "));

// Arvutamine
let trahviSumma = (tegelikKiirus - lubatudKiirus) * 3;
trahviSumma = Math.min(trahviSumma, 190);

// Tulemuse välastamine
console.log(`${userName}, kiiruse ületamise eest on teie trahv ${trahviSumma} eurot.`)