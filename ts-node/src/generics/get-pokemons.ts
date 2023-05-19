import axios from "axios";
import { Pokemon } from "../interfaces/pokemon";

// Usamos AXIOS
// Esto al ser una promesa hay que aclararlo y poner que tipo de dato resuelve, con formato
// de generico
// Luego del get le agregamos la interfaz, lo que nos va a dar ayuda a la hora de llamar
// propiedades
export const getPokemon = async(pokemonId:number):Promise <Pokemon> => {
    const {data} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    
    
    return data
}