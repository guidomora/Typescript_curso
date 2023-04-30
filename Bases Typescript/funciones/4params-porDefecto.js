"use strict";
(() => {
    //  definimos que upper es un parametro opcional pero con un tipo de dato
    // definido por defecto
    const fullName = (firstName, lastName, upper = false) => {
        // si upper es true pasa a mayusc todo sino lo deja como estaba escrito
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
