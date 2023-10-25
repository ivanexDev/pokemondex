const getSinglePokemon = async (pkmn : number | string)=>{
    try {
       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmn}`)
       const data = await response.json()
       return data
    } catch (error) {
        console.log(error)
    }
}


export default getSinglePokemon;