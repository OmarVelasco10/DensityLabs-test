import { Dispatch } from "@reduxjs/toolkit";

import { PokemonDetails } from "../../types/types";
import { pokemonApi } from "../../api/pokemonApi";

import {
  setCurrentPokemon,
  setPokemon,
  setPokemons,
  startLoadingPokemons,
} from "./pokemonsSlice";

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
      console.error("Error to fetch Pokemon", error);
    }
  };
};

export const getPokemons = (page = 1) => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoadingPokemons());

    try {
      const offset = (page - 1) * 20;
      let limit = 0;
      const lastPage = 8;
      page === lastPage ? (limit = 10) : (limit = 20);
      const { data } = await pokemonApi.get(
        `pokemon?limit=${limit}&offset=${offset}`
      );

      dispatch(
        setPokemons({
          pokemons: data.results,
          page,
        })
      );
    } catch (error) {
      console.error("Error to fetch Pokemons", error);
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
