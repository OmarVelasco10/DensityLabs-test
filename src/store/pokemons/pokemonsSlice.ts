import { createSlice } from "@reduxjs/toolkit";

interface PokemonState {
    isLoading: boolean,
    page: number,
    pokemons: Pokemon[];
}

type Pokemon = {
    name: string;
    url: string
}

const initialState: PokemonState = {
    isLoading: false,
    page: 0,
    pokemons: []
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
        }
    }
});

export const { startLoadingPokemons, setPokemons } = PokemonsSlice.actions;