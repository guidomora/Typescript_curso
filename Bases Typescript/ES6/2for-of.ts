(() => {
    type Avenger = {
        name:string,
        weapon:string,
    }

    const ironman:Avenger = {
        name: "Ironman",
        weapon:"Armour"
    }
    const captainAmerica:Avenger = {
        name: "Capitan",
        weapon:"Escudo"
    }
    const thor:Avenger = {
        name: "Thor",
        weapon:"Mjolnir"
    }

    const avengers:Avenger[] = [ironman, thor, captainAmerica]

    // Nos trae cada propiedad de cada avenger del array
    for (const avenger of avengers) {
        console.log(avenger);
    }
})()