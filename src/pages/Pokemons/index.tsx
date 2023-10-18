import React, { useEffect, useState } from "react";
import { getPokemons } from "../../store/pokemons";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { Card, Aside, Header, Loading } from "../../components";
import { ButtonsContainer, Main, MainContainer } from "./styled";

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

  const filteredPokemons = pokemons?.filter((pokemon: any) => {
    return pokemon.name.toLocaleLowerCase().match(query.toLocaleLowerCase());
  });

  return (
    <MainContainer>
      <Aside />

      <Main>
        {isLoading || !pokemons ? (
          <Loading />
        ) : (
          <>
            <Header query={query} setQuery={setQuery} />
            {filteredPokemons.map((pokemon, index) => (
              <Card
                key={`${pokemon.name}-${index}`}
                name={pokemon.name}
                url={pokemon.url}
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
      </Main>
    </MainContainer>
  );
};

export { Component as Pokemons };
export default Component;
