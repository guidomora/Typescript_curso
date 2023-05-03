(() => {
    // Palabra reservada de TS "type". poner reglas al objeto o variable
    // que creamos. Ahora no hace falta estar describiendo cada tipo de dato
    // en cada objeto, solo le asignamoe el tipo "Hero"
    type Hero = {
        name:string,
        age?:number,
        powers: string[],
        getNombre?: () => string
    }

    let flash: Hero = {
        name: "Barry",
        age: 24,
        powers: ["super velocidad", "viajar en el tiempo"],
    }


    let superman: Hero = {
        name: "Clark",
        age: 60,
        powers: ["super fuerza", "rayos"],
        getNombre() {
            return this.name
        }
    }

    
})()
