import toCapitalize from "../helper/toCapitalize"
import { PokemonTypesData } from "../types/pokemonList"

const getSinglePokemon = async (pkmn : number | string)=>{
    try {
       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmn}`)
       const data = await response.json()
       return {
        name: toCapitalize(data.forms[0].name),
        img: data.sprites.other.dream_world.front_default,
        types: data.types.map((type: PokemonTypesData) => type.type.name),
        height: data.height,
        weight: data.weight,
      }
    } catch (error) {
        console.log(error)
    }
}


export default getSinglePokemon;