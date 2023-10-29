import axios from "axios"
import toCapitalize from "../helper/toCapitalize"
import { PokemonTypesData } from "../types/pokemonList"

axios.defaults.baseURL = "https://pokeapi.co/api/v2/pokemon"

export const getAllPokemon = async ()=>{
    try {
       const {data} = await axios.get("/?limit=151")
       console.log(data)
       return data.results 
    } catch (error) {
        console.log(error)
    }
}

export const getSinglePokemon = async (pkmn : number | string)=>{
    try {
       const {data} = await axios.get(`/${pkmn}`)
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
