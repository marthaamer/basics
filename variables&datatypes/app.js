let inputCycleCount = Number(prompt('Sisestage ringide arv.'))

if ((inputCycleCount % 2) == 1) {
    inputCycleCount -= 1;
}

let totalCycles = inputCycleCount / 2;
let cycle = 0;

let totalCarrots = 0; let carrots = 2
while (cycle < totalCycles) {
    totalCarrots += carrots; carrots += 2; cycle +=1;
}

console.log(`Progandite koguarv on: ${totalCarrots}`)