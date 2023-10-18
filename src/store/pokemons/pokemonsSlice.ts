import { createSlice } from "@reduxjs/toolkit";

interface PokemonState {
    isLoading: boolean,
    page: number,
    pokemons: Pokemon[];
    pokemon: Pokemon | null
}

type Pokemon = {
    name: string;
    url: string
}

const initialState: PokemonState = {
    isLoading: false,
    page: 0,
    pokemon: null,
    pokemons: [],
}

export const PokemonsSlice = createSlice({
    name: 'pokemonsSlice',
    initialState,
    reducers: {

        startLoadingPokemons: (state) => {
            state.isLoading = true;
        },
        setPokemons: (state,  {payload }) => {
            state.isLoading = false;
            state.page = payload.page;
            state.pokemons = payload.pokemons
        },
        setCurrentPokemon: (state, {payload}) => {
            const { name } = payload;
            state.isLoading = false;
            state.pokemon = state.pokemons.find(pokemon => pokemon.name === name) || null;

        }
    }
});

export const { startLoadingPokemons, setPokemons, setCurrentPokemon } = PokemonsSlice.actions;