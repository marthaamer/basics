let numAskers = Number(prompt("Mitu pöialpoissi tahab õunu? Kuni 7"))
const maxApples = 14;

let totalApples = 0;
for (let i = 0; i < numAskers; i++) {
    let apples = Math.floor(Math.random() * 2) + 1; totalApples += apples;
    console.log(apples)
}

console.log("Lumivalgeksele jäi " + (maxApples - totalApples))