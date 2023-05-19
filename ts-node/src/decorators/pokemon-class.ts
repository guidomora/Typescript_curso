// Primer decorador hecho
// Decorador se puede hacer con una funcion flecha tambien
function printToConsole(constructor: Function) {
    console.log(constructor);
}

// Decoradores de fabrica
// Segundo decorador (factory decorator)
const printToConsoleConditional = (print: boolean = false): Function => {
    if (print) {
        // aca no se manda como decorador sino que como funcion
        return printToConsole
    } else {
        return () => { }
    }
}

// Tercero
// seal previene que se le agreguen nuevas propiedades al objeto
// este controlador previene que alguien haga una expansion de una clase
const bloquearPrototipo = function (constructor: Function) {
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}


// Cuarto
function CheckValidPokemonId() {
    return function (target: any, popertyKey: string, descriptor: PropertyDescriptor) {
        //console.log({target, popertyKey, descriptor});
        const originalMethod = descriptor.value
        descriptor.value = (id: number) => {
            if (id < 1 || id > 800) {
                return console.error("no existe id");  
            } else {
                return originalMethod(id)
            }
        }

    }
}


// Usando el decorador, se ejecuta en el meomento que se define la clase
//@printToConsole

@bloquearPrototipo
@printToConsoleConditional(true)
export class Pokemon {
    public publicApi: string = "https://pokeapi.co"
    constructor(
        public name: string
    ) {}

    @CheckValidPokemonId()
    savePokemonToDB(id: number) {
        console.log(`guardado en la DB ${id}`);
    }
}