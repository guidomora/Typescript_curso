"use strict";
(() => {
    // solo esta definido el firstName, el resto va a parar a restArgs
    // con el operador rest y tiene de tipo de valor un array de strings
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    const superman = fullName("clark", "joseph", "kent");
    console.log({ superman });
})();
