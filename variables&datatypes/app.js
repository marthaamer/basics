let vanus = Number(prompt("Sisatge oma vanus: "));
let sugu = String(prompt('Sisestage oma sugu (M, N): ')).toUpperCase()
let trainingType = Number(prompt(`Sisetage trenni tüüp: 
            1 = Tervisetreening;
            2 = Põhivastupidavuse treening;
            3 = Intensiivne aeroobne treening;
`))

let maxPulse = getMaxPulse(sugu);
var functions = {
    [1]: function() {
        return [maxPulse * (50 / 100), maxPulse * (70 / 100)];
    },

    [2]: function() {
        return [maxPulse * (70 / 100), maxPulse * (80 / 100)];
    },

    [3]: function() {
        return [maxPulse * (80 / 100), maxPulse * (87 / 100)];
    }
}

function getMaxPulse() {
    if (sugu === "M") {
        return 220 - vanus;
    } else if (sugu === "N") {
        return 206 - (vanus * 0.88);
    }
}

let pulss = functions[trainingType]();
console.log(`Pulsi sagedus peaks olema ${Math.round(pulss[0])} kuni ${Math.round(pulss[1])}.`)