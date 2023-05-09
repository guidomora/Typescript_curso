"use strict";
(() => {
    const cliente = {
        name: "GUido",
        age: 23,
        address: {
            id: 123,
            zip: "ASD ASD",
            city: "CABA"
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
    const cliente2 = {
        name: "GUido",
        age: 23,
        address: {
            id: 345,
            zip: "rew dfg",
            city: "jujuy"
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
})();
(() => {
    class Mutant {
        mutantPower(id) {
            return this.name + " " + this.realName;
        }
    }
})();
(() => {
    let flash = {
        name: "Barry",
        age: 24,
        powers: ["super velocidad", "viajar en el tiempo"],
    };
    let superman = {
        name: "Clark",
        age: 60,
        powers: ["super fuerza", "rayos"],
        getNombre() {
            return this.name;
        }
    };
})();
//# sourceMappingURL=main.js.map