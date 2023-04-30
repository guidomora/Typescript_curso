"use strict";
(() => {
    const addNumbers = (a, b) => {
        return a + b;
    };
    const greet = (name) => {
        return `Hola ${name}`;
    };
    const saveWorld = () => {
        return "Mundo salvado";
    };
    // asignamos que es una funcion
    //let myFunction: Function;
    // marca error ya que esto no es una funcion
    //myFunction = 10
    // los argumentos son numeros y la funcion es de numeros
    // let myFunction: (x:number, z:number) => number
    // myFunction = addNumbers
    // console.log(myFunction(1,2));
    // argumentos string y funcion de string
    // let myFunction: (x:string) => string
    // myFunction = greet
    // console.log(myFunction("Guido"));
    // No reciber argumento pero es de string
    // let myFunction: () => string
    // myFunction = saveWorld
    // console.log(saveWorld());
})();
