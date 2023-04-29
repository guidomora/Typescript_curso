

(() => {
    //  de esta forma le indico que tipos de datos va a tener pq si dejaba
    // sin especificar, no iba a poder pushear el "true"
    //const numbers: (string | number | boolean)[] = [1, 2, 3, 4, 5, 6, "6", 7, 8, 9, 10]
    //numbers.push(true)

    
    const numbers:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    const villains = ["duende verde", "joker", "thanos"]
    // Al ser un array de strings ya en el forEach nos dice que el value
    // es de tipo string
    villains.forEach(villain => console.log(villain.toUpperCase()));

})()