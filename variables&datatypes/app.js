var Lause = "Istekoht loositi, "

let selectionType = String(prompt("Kas soovite valida koha ise ('ise') või loosiga ('loos')?"))
if (selectionType == "ise") {
    let seatLocation = String(prompt("Kas soovite istuda akna kõrval ('aken') või tahate istuda mujal ('muu')?"));

    if (seatLocation === "aken") {
        seatLocation = "Aknakõrval"
    } else {
        seatLocation = "Vahekäigukoht"
    }

    Lause = `Istekoht valiti ise, ${seatLocation}`
}

let chance = Math.ceil(Math.random() * 3);
if (chance == 1) {
    Lause = Lause + 'Aknakõrval.'
} else {
    Lause = Lause + 'Vahekäigukoht.'
}

console.log(Lause);