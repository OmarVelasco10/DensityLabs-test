import { PokemonDetails } from "../../types/types";
import { InfoItem } from "../InfoItem";
import { Stat } from "../Stat";
import {
  AbilityContainer,
  CardContainer,
  InfoContainer,
  Name,
  Paragraph,
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
        { types && types.map((item, index) => (
          <p key={`${item.type.name}-${index}`}>{item.type.name}</p>
        ))}
      </TypeContainer>
      <InfoContainer>
        <InfoItem title={'Number'} value={number}/>
        <InfoItem title={'Height'} value={height}/>
        <InfoItem title={'Weight'} value={weight}/>
      </InfoContainer>
      <PowerContainer>
        <StatsContainer>
          <Title>Stats</Title>
          <Stat value={hp} />
          <Stat value={attack} />
          <Stat value={defense} />
          <Stat value={specialAttack} />
          <Stat value={specialDefense} />
          <Stat value={speed} />
        </StatsContainer>
        <AbilityContainer>
          <Title>Abilities: </Title>
          { abilities && abilities.map((item, index) => (
            <Span key={`${item.ability.name}-${index}`}>
              {item.ability.name}
            </Span>
          ))}
        </AbilityContainer>
      </PowerContainer>
    </CardContainer>
  );
};

export { Component as CardDetails };
export default Component;
