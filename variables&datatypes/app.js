let numDice = Number(prompt('Sisestage täringute arv.'))

console.log(`Täringute arv: ${numDice}`)
for (let i = 0; i < numDice; i++) {
    console.log(Math.floor((Math.random() * 6) + 1))
}