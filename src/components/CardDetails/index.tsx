import { PokemonDetails } from "../../types/types";

import { InfoItem, Stat } from "../";

import {
  AbilityContainer,
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

  const {
    name,
    types,
    abilities,
    hp,
    attack,
    defense,
    specialAttack,
    specialDefense,
    speed,
    weight,
    height,
    number,
  } = pokemon;

  return (
    <CardContainer>
      <Name> {name.toUpperCase()}</Name>
      <TypeContainer>
        <Title>Type: </Title>
        {types &&
          types.map((item, index) => (
            <li key={`${item.type.name}-${index}`}>
              <Span>{item.type.name}</Span>
            </li>
          ))}
      </TypeContainer>
      <InfoContainer>
        <InfoItem title="Number" value={number} />
        <InfoItem title="Height" value={height} />
        <InfoItem title="Weight" value={weight} />
      </InfoContainer>
      <PowerContainer>
        <StatsContainer>
          <Title>Stats</Title>
          <Stat title="Hp" value={hp} />
          <Stat title="Attack" value={attack} />
          <Stat title="Defense" value={defense} />
          <Stat title="Special Attack" value={specialAttack} />
          <Stat title="Special Defense" value={specialDefense} />
          <Stat title="Speed" value={speed} />
        </StatsContainer>
        <AbilityContainer>
          <Title>Abilities </Title>
          {abilities &&
            abilities.map((item, index) => (
              <li key={`${item.ability.name}-${index}`}>
                <Span>{item.ability.name}</Span>
              </li>
            ))}
        </AbilityContainer>
      </PowerContainer>
    </CardContainer>
  );
};

export { Component as CardDetails };
export default Component;
