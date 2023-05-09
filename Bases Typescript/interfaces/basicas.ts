(()=> {
    // Es muy similar a los tipos de objeto, nos ayuda a restringir los tipos
    // de los objetos, si es casi identicoa los tipos.
    // La diferencia es euq los tipos no son extendibles, las interfaces SI
    interface Hero  {
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