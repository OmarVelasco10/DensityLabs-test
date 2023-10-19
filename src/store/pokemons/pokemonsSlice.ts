import { createSlice } from "@reduxjs/toolkit";
import { Pokemon, PokemonDetails } from "../../types/types";

interface PokemonState {
  isLoading: boolean;
  page: number;
  pokemons: Pokemon[];
  pokemon: PokemonDetails | null;
}

const initialState: PokemonState = {
  isLoading: false,
  page: 0,
  pokemons: [],
  pokemon: null,
};

export const PokemonsSlice = createSlice({
  name: "pokemonsSlice",
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, { payload }) => {
      state.isLoading = false;
      state.page = payload.page;
      state.pokemons = payload.pokemons;
    },
    setCurrentPokemon: (state, { payload }) => {
      const { name } = payload;
      state.isLoading = false;
      state.pokemon =
        state.pokemons.find((pokemon) => pokemon.name === name) || null;
    },
    setPokemon: (state, { payload }) => {
      state.isLoading = false;
      state.pokemon = payload.pokemon;
    },
  },
});

export const {
  startLoadingPokemons,
  setPokemons,
  setCurrentPokemon,
  setPokemon,
} = PokemonsSlice.actions;
