"use strict";
(() => {
    let avengers = 10;
    const villains = 20;
    console.log(avengers);
    if (avengers < villains) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("salvados");
    }
    avengers = Number("123A");
    console.log({ avengers });
    // esto da NaN lo que es considerado un numero, por eso hay que tener cuidado igual
    // aunque usemos TS no nos salvamos de los errores
    // 
})();
