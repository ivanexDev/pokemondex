const getAllPokemon = async ()=>{
    try {
       const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
       const data = await response.json()
       return data.results 
    } catch (error) {
        console.log(error)
    }
}


export default getAllPokemon;