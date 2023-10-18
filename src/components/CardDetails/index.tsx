import { PokemonDetails } from "../../types/types";

import { InfoItem, Stat } from "../";

import {
  AbilitiesContainer,
  CardContainer,
  InfoContainer,
  Name,
  PowerContainer,
  Span,
  StatsContainer,
  Title,
  TypeContainer,
} from "./styled";

interface CardDetailsProps {
  pokemon?: PokemonDetails | null;
}

const Component = ({ pokemon }: CardDetailsProps) => {
  if (!pokemon) {
    return <div>Error to fetch pokemon.</div>;
  }

  return (
    <CardContainer>
      <Name> {pokemon.name.toUpperCase()}</Name>
      <TypeContainer>
        <Title>Type: </Title>
        {pokemon.types &&
          pokemon.types.map((item, index) => (
            <li key={`${item.type.name}-${index}`}>
              <Span>{item.type.name}</Span>
            </li>
          ))}
      </TypeContainer>
      <InfoContainer>
        <InfoItem title="Number" value={pokemon.number} />
        <InfoItem title="Height" value={pokemon.height} />
        <InfoItem title="Weight" value={pokemon.weight} />
      </InfoContainer>
      <PowerContainer>
        <StatsContainer>
          <Title>Stats</Title>
          <Stat title="Hp" value={pokemon.hp} />
          <Stat title="Attack" value={pokemon.attack} />
          <Stat title="Defense" value={pokemon.defense} />
          <Stat title="Special Attack" value={pokemon.specialAttack} />
          <Stat title="Special Defense" value={pokemon.specialDefense} />
          <Stat title="Speed" value={pokemon.speed} />
        </StatsContainer>
        <AbilitiesContainer>
          <Title>Abilities </Title>
          {pokemon.abilities &&
            pokemon.abilities.map((item, index) => (
              <li key={`${item.ability.name}-${index}`}>
                <Span>{item.ability.name}</Span>
              </li>
            ))}
        </AbilitiesContainer>
      </PowerContainer>
    </CardContainer>
  );
};

export { Component as CardDetails };
export default Component;
