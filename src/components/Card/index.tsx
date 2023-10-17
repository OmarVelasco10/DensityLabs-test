import { useNavigate } from "react-router-dom";

import { CardContainer, Name, Pokeball } from "./styled";
import pokeball from "../../assets/pokeball.png";

interface CardProps {
  name: string;
}

const Component = ({ name }: CardProps) => {
  const navigate = useNavigate();

  const handleDoubleClick = () => {
    navigate(`/pokemons/${name}`);
  };

  return (
    <CardContainer onDoubleClick={handleDoubleClick}>
      <Name> {name.toUpperCase()}</Name>

      <Pokeball src={pokeball} alt="pokeball" />
    </CardContainer>
  );
};

export { Component as Card };
export default Component;
