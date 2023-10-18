import { pokemonApi } from "../../api/pokemonApi";
import { setCurrentPokemon, setPokemons, startLoadingPokemons } from "./pokemonsSlice"


export const getPokemons = (page = 1) => {
    return async(dispatch: any) => {
        dispatch(startLoadingPokemons());

        // pokemon?limit=20&offset=20.
        const offset = (page - 1) * 20;

        const { data } = await pokemonApi.get(`pokemon?limit=20&offset=${offset}`);
        console.log(data);

        dispatch(setPokemons({
            pokemons: data.results,
            page
        }));
    }
}

export const currentPokemon = (name: string) => {
    return async(dispatch: any) => {
        dispatch(startLoadingPokemons());

        // pokemon?limit=20&offset=20.
       

        dispatch(setCurrentPokemon({
            name
        }));
    }
}