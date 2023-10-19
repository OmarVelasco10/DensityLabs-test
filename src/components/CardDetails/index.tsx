import { useAppSelector } from "../../hooks";
import { InfoItem, Span } from "../common";
import { Stat } from "../";

import {
  AbilitiesContainer,
  CardContainer,
  InfoContainer,
  Name,
  PowerContainer,
  StatsContainer,
  Title,
  TypeContainer,
} from "./styled";

import { ErrorMessage } from "../common/ErrorMessage";



const Component = () => {
  const { pokemon } = useAppSelector((state) => state.pokemons);


  if (!pokemon) {
    return <ErrorMessage message="Error to fetch Pokemon" />;
  }

  if(pokemon.number && pokemon.number > 151) {
    return <ErrorMessage message={`${pokemon.name.toUpperCase()} is not part of the first generation`}/>
  }

  return (
    <CardContainer data-testid="cardDetails-container-id">
      <Name data-testid="cardDetails-name-id"> {pokemon.name.toUpperCase()}</Name>
      <TypeContainer data-testid="cardDetails-type-container-id">
        <Title>Type: </Title>
        {pokemon.types &&
          pokemon.types.map((item, index) => (
            <li key={`${item.type.name}-${index}`}>
              <Span>{item.type.name}</Span>
            </li>
          ))}
      </TypeContainer>
      <InfoContainer data-testid="cardDetails-info-container-id">
        <InfoItem title="Number" value={pokemon.number} />
        <InfoItem title="Height" value={pokemon.height} />
        <InfoItem title="Weight" value={pokemon.weight} />
      </InfoContainer>
      <PowerContainer data-testid="cardDetails-power-container-id">
        <StatsContainer data-testid="cardDetails-stats-container-id">
          <Title>Stats</Title>
          <Stat data-testid="cardDetails-hp-id" title="Hp" value={pokemon.hp} />
          <Stat title="Attack" value={pokemon.attack} />
          <Stat title="Defense" value={pokemon.defense} />
          <Stat title="Special Attack" value={pokemon.specialAttack} />
          <Stat title="Special Defense" value={pokemon.specialDefense} />
          <Stat title="Speed" value={pokemon.speed} />
        </StatsContainer>
        <AbilitiesContainer data-testid="cardDetails-abilities-container-id">
          <Title>Abilities </Title>
          {pokemon.abilities &&
            pokemon.abilities.map((item, index) => (
              <Span key={`${item.ability.name}-${index}`}>
                {item.ability.name}
              </Span>
            ))}
        </AbilitiesContainer>
      </PowerContainer>
    </CardContainer>
  );
};

export { Component as CardDetails };
export default Component;
