export interface PokemonList {
    name: string;
    url: string;
}

export interface PokemonDialogInfo{
    name:string
    img: string
    types: string[]
    height: number
    weight: number
  }

export interface PokemonTypesData {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }