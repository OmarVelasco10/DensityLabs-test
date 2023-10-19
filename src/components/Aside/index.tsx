import { useAppSelector } from "../../hooks/useAppSelector";
import { getNumber } from "../../helpers/getNumber";
import {pokeapiLogo, pikachu} from "../../assets";

import { LogoContainer, MainContainer, PokemonContainer } from "./styled";

const Component = () => {
  const { pokemon } = useAppSelector((state) => state.pokemons);

  return (
    <MainContainer data-testid="aside-container-id">
      <LogoContainer data-testid="aside-logo-id">
        <img src={pokeapiLogo} alt="pokemon" />
      </LogoContainer>
      <PokemonContainer data-testid="aside-pokemon-container-id">
        {pokemon ? (
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getNumber(
              pokemon.url
            )}.png`}
            alt={pokemon.name}
          />
        ) : (
          <img src={pikachu} alt="pikachu" />
        )}
      </PokemonContainer>
    </MainContainer>
  );
};

export { Component as Aside };
export default Component;
