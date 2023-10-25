import { useEffect, useState } from "react";
import "./App.css";
import { Title } from "./components/Title";
import getAllPokemon from "./services/getPokemon";
import { PokemonGrid } from "./components/PokemonGrid";
import { PokemonList } from "./types/pokemonList";


function App() {

  const [allPokemon , setAllPokemon ] = useState<PokemonList[] | null>(null)

  useEffect(()=>{
    getAllPokemon().then(res => setAllPokemon(res))
  },[])

  return (<>
        <Title title="Pokedex"/>
    <div className="container">
      <PokemonGrid allPokemon={allPokemon}/>
    </div>
  </>
  );
}

export default App;
