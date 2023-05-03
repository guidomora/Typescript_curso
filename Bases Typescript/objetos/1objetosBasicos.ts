(() => {
    // se definen los tipos de datos del objeto, el ultimo es una funcion opcional, asi que definimos que
    // es lo que va a devolver esa funcion
    let flash: { name: string, age?: number, powers: string[], getNombre?: () => string } = {
        name: "Barry",
        age: 24,
        powers: ["super velocidad", "viajar en el tiempo"],
    }

    // aca llamamos a la funcion
    flash = {
        name: "Clark",
        age: 60,
        powers: ["super fuerza"],
        getNombre() {
            return this.name;
        }
    }

    console.log(flash.getNombre?.());
    
})()
