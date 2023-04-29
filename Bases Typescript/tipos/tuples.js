"use strict";
(() => {
    // Definimos que el primer dato es str, el segundo numb y el 3ero boolean
    // se puede definir la cantidad que uno quiera
    //  si yo quiero hero[0]= 50 me va arrojar error en TS
    const hero = ["dr strange", 100, false];
    hero[2] = true;
    console.log(hero);
})();
