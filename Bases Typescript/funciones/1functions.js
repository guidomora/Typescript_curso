"use strict";
(() => {
    const hero = "Flash";
    function returnName() {
        return hero;
    }
    const activeteBatSignal = () => {
        return "Bati senal";
    };
    console.log(typeof activeteBatSignal);
    const heroName = returnName();
    console.log(heroName);
})();
