"use strict";
// siuempre conviene indicar que tipo de dato es pq por ej 
// const batman: string = "Batman" cuando llamemos batman. nos va a arrojar
// todas la propiedades y metodos de los strings en este caso
// 
// 
(() => {
    var _a;
    const batman = "Batman";
    const greenLantern = "Green Lantern";
    const volcanNegro = "Heroe: Volcan Negro";
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "no esta");
    // si batman en la posicion 10 tiene algo, ejecuta el metodo, sino no
    // ejecuta el string
})();
