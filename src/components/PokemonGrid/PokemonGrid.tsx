import React, { useRef, useState } from "react";
import "./PokemonGrid.css";
import { PokemonDialogInfo, PokemonList } from "../../types/pokemonList";
import { ToolTipName } from "../ToolTipName";
import toCapitalize from "../../helper/toCapitalize";
import getSinglePokemon from "../../services/getSinglePokemon";

export type PokemonGridProps = {allPokemon: PokemonList[] | null;};

const PokemonGrid: React.FC<PokemonGridProps> = ({ allPokemon }) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const [pokemonInfo, setPokemonInfo] = useState<PokemonDialogInfo>();

  const handlePokemonInfo = (name: string) => {
    getSinglePokemon(name).then((data) => {
      setPokemonInfo(data);
    });
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = ()=>{
    modalRef.current?.close();
    setPokemonInfo(undefined);
  }

  return (
    <div className="pokemongrid">
      {allPokemon?.map((pkmn, index) => {
        const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`;
        return (
          <div key={`${pkmn.name}-${index}`}>
            <div className="grid-item">
              <ToolTipName title={toCapitalize(pkmn.name)}>
                <img
                  src={pokemonImg}
                  alt=""
                  onClick={() => handlePokemonInfo(pkmn.name)}
                />
              </ToolTipName>
            </div>
            <dialog ref={modalRef}>
              <div className="dialog-container">
                <div className="dialog-title">
                <h1>{pokemonInfo?.name}</h1>
                <button className="close-dialog"onClick={closeModal}>
                    X
                </button>
                </div>
                <img src={pokemonInfo?.img} alt="" />
                <div className="dialog-types">
                  {pokemonInfo?.types?.map((type, index) => (
                    <p key={`${type}-${index}`}>{type}</p>
                  ))}
                  </div>
                  <p className="measure">Height: {pokemonInfo?.height}</p>
                  <p className="measure">Weight: {pokemonInfo?.weight}</p>
              </div>
            </dialog>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonGrid;
