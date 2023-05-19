// Decoradores: Simples funciones que se ejecutan al momento de transpilar

import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon("Charmander")
console.log(charmander);

console.log(charmander.savePokemonToDB(50));
