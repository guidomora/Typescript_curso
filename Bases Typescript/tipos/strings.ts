// siuempre conviene indicar que tipo de dato es pq por ej 
// const batman: string = "Batman" cuando llamemos batman. nos va a arrojar
// todas la propiedades y metodos de los strings en este caso
// 
// 


(() => {
    const batman: string = "Batman"
    const greenLantern: string = "Green Lantern"
    const volcanNegro: string = "Heroe: Volcan Negro"


    console.log(batman.toUpperCase());
    console.log(batman[10]?.toUpperCase()|| "no esta");
    // si batman en la posicion 10 tiene algo, ejecuta el metodo, sino no
    // ejecuta el string
})()