import React, { useEffect, useState } from "react";

import { getPokemons } from "../../store/pokemons";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { Card, Aside, Header, Loading, ErrorMessage } from "../../components";
import { Pokemon } from "../../types/types";

import {
  ButtonsContainer,
  Main,
  MainContainer,
  PokemonsContainer,
} from "./styled";

const Component = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();
  const { isLoading, pokemons, page } = useAppSelector(
    (state) => state.pokemons
  );
  useEffect(() => {
    if (pokemons[0] === undefined) {
      dispatch(getPokemons());
    }
  }, []);

  const filteredPokemons = pokemons?.filter((pokemon: Pokemon) => {
    return pokemon.name.toLocaleLowerCase().match(query.toLocaleLowerCase());
  });

  return (
    <MainContainer data-testid="hola">
      <Aside />

      <Main>
        {isLoading || !pokemons ? (
          <Loading />
        ) : (
          <>
            <Header query={query} setQuery={setQuery} />
            <PokemonsContainer>
              {filteredPokemons.length === 0 ? (
                <ErrorMessage
                  message={`${query} does not exist on this page. Try on another page.`}
                />
              ) : (
                <>
                  {filteredPokemons.map((pokemon, index) => (
                    <Card
                      key={`${pokemon.name}-${index}`}
                      name={pokemon.name}
                    />
                  ))}
                  <ButtonsContainer>
                    <button
                      className="btn btn-warning"
                      disabled={isLoading || page === 1}
                      onClick={() => dispatch(getPokemons(page - 1))}
                    >
                      Prev
                    </button>
                    <button
                      className="btn btn-primary"
                      disabled={isLoading || page === 8}
                      onClick={() => dispatch(getPokemons(page + 1))}
                    >
                      Next
                    </button>
                  </ButtonsContainer>
                </>
              )}
            </PokemonsContainer>
          </>
        )}
      </Main>
    </MainContainer>
  );
};

export { Component as Pokemons };
export default Component;
