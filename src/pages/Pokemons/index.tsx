import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getPokemons } from "../../store/pokemons";
import { ButtonsContainer, Main, MainContainer } from "./styled";

import { Card } from "../../components/Card";
import { Aside } from "../../components/Aside";
import { Header } from "../../components/Header";

const Component = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();
  const { isLoading, pokemons, page } = useAppSelector(
    (state) => state.pokemons
  );
  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const filteredPokemons = pokemons?.filter((pokemon: any) => {
    return pokemon.name.toLocaleLowerCase().match(query.toLocaleLowerCase());
  });

  return (
    <MainContainer>
      <Aside/>

      <Main>
        <Header query={query} setQuery={setQuery}/>
        {filteredPokemons.map((pokemon, index) => (
          <Card key={`${pokemon.name}-${index}`} name={pokemon.name} url={pokemon.url}/>
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
            className="btn btn-success"
            disabled={isLoading || page === 8}
            onClick={() => dispatch(getPokemons(page + 1))}
          >
            Next
          </button>
        </ButtonsContainer>
      </Main>
    </MainContainer>
  );
};

export { Component as Pokemons };
export default Component;
