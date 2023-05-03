"use strict";
(() => {
    const a = 10;
    console.log(a);
})();
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
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName("Tony", "Stark");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || " ---- "}`;
    };
    const name = fullName("Tony");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || " ---- "}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || " ---- "}`;
        }
    };
    const name = fullName("Tony", "Stark", true);
    console.log({ name });
})();
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
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    const superman = fullName("clark", "joseph", "kent");
    console.log({ superman });
})();
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(() => {
    var _a;
    let flash = {
        name: "Barry",
        age: 24,
        powers: ["super velocidad", "viajar en el tiempo"],
    };
    flash = {
        name: "Clark",
        age: 60,
        powers: ["super fuerza"],
        getNombre() {
            return this.name;
        }
    };
    console.log((_a = flash.getNombre) === null || _a === void 0 ? void 0 : _a.call(flash));
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
(() => {
    let myCustomVariable = "Guido";
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Guidito",
        age: 23,
        powers: ["buho volador"]
    };
    console.log(typeof myCustomVariable);
})();
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
let mystique;
mystique = charles;
mystique = apocalipsis;
console.log(mystique);
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = "Dr strange";
    console.log(avenger.charAt(0));
    console.log(avenger.charAt(0));
    avenger = 150.345354;
    console.log(avenger.toFixed(2));
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villains = ["duende verde", "joker", "thanos"];
    villains.forEach(villain => console.log(villain.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = true;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error("hay error");
})();
(() => {
    let isActive = null;
    console.log(isActive);
})();
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
})();
(() => {
    var _a;
    const batman = "Batman";
    const greenLantern = "Green Lantern";
    const volcanNegro = "Heroe: Volcan Negro";
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "no esta");
})();
(() => {
    const hero = ["dr strange", 100, false];
    hero[2] = true;
    console.log(hero);
})();
(() => {
    const batman = () => {
    };
    const bat = batman();
    console.log(bat);
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["acuaman"] = 0] = "acuaman";
        Fuerza[Fuerza["batman"] = 1] = "batman";
        Fuerza[Fuerza["flash"] = 5] = "flash";
        Fuerza[Fuerza["superman"] = 100] = "superman";
    })(Fuerza || (Fuerza = {}));
    const fuerzaFlash = Fuerza.flash;
    const fuerzaSuperman = Fuerza.superman;
    const fuerzaBatman = Fuerza.batman;
    const fuerzaAcuaman = Fuerza.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=main.js.map