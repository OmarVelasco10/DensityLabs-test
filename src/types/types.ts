export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonDetails = {
  name: string;
  url: string;
  type?: Type[] | Type;
  ability?: Ability[] | Ability;
  hp?: number;
  attack?: number;
  defense?: number;
  specialAttack?: number;
  specialDefense?: number;
  speed?: number;
  weight?: number;
  height?: number;
  number?: number;
};

export type Type = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};
