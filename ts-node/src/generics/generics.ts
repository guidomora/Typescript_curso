// Las funciones genericas son funciones que pueden recibir cualquier tipo de argumento


export const printObject = (argumento:any) => {
    console.log(argumento);
    
}

// La T es el standar para indicar que es de tipo generico (se puede usar cualquier letra/palabra)
export function genericFunction<T> (argumento:T):T {
    return argumento
}

// Asi se hace en una funcion flecha
export const genericArrow = <T>(argumento:T) => {
    argumento
}


