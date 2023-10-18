import { PokemonDetails } from "../../types/types";
import { CardContainer, Name } from "./styled";

interface CardDetailsProps {
  pokemon?: PokemonDetails | null;
}

const Component = ({pokemon}: CardDetailsProps) => {
    if (!pokemon) {
        return <div>Error to fetch pokemon.</div>;
      }
    
      const { name } = pokemon;
  console.log("name", name);
  return (
    <CardContainer>
      <Name> {name.toUpperCase()}</Name>
    </CardContainer>
  );
};

export { Component as CardDetails };
export default Component;
