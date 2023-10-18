import { Dispatch } from "@reduxjs/toolkit";
import { pokemonApi } from "../../api/pokemonApi";
import {
  setCurrentPokemon,
  setPokemon,
  setPokemons,
  startLoadingPokemons,
} from "./pokemonsSlice";
import { PokemonDetails } from "../../types/types";

export const getPokemon = (name: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoadingPokemons());

    try {
        const { data } = await pokemonApi.get(`/pokemon/${name}`);

        const pokemon: PokemonDetails = {
          name: data.name,
          url: data.forms[0].url,
          types: data.types,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          specialAttack: data.stats[3].base_stat,
          specialDefense: data.stats[4].base_stat,
          speed: data.stats[5].base_stat,
          weight: data.weight,
          height: data.height,
          number: data.id,
          abilities: data.abilities,
        };
        dispatch(setPokemon({ pokemon }));
    } catch (error) {
        console.error('Error to fetch Pokemon', error);
    }
   
  };
};

export const getPokemons = (page = 1) => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoadingPokemons());
    console.log('getPokemons');

    try {
         // pokemon?limit=20&offset=20.
    const offset = (page - 1) * 20;

    const { data } = await pokemonApi.get(`pokemon?limit=20&offset=${offset}`);

    if (page === 8) {
      const pokemons = data.results.slice(0, 10);
      console.log("entrando");

      return dispatch(
        setPokemons({
          pokemons,
          page,
        })
      );
    }

    dispatch(
      setPokemons({
        pokemons: data.results,
        page,
      })
    );
    } catch (error) {
        console.error('Error to fetch Pokemons', error);
    }
   
  };
};

export const currentPokemon = (name: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoadingPokemons());

    dispatch(
      setCurrentPokemon({
        name,
      })
    );
  };
};
