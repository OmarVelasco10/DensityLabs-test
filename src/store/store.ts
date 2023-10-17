import { configureStore } from '@reduxjs/toolkit';
import { PokemonsSlice } from './pokemons';

export const store = configureStore({
    reducer: {
        pokemons: PokemonsSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

