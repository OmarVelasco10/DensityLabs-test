import { useNavigate } from "react-router-dom";

import { CardContainer, Name, Pokeball } from "./styled";
import pokeball from "../../assets/pokeball.png";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { currentPokemon } from "../../store/pokemons";

interface CardProps {
  name: string;
  url: string;
}

const Component = ({ name }: CardProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(currentPokemon(name));
  };

  const handleDoubleClick = () => {
    navigate(`/pokemons/${name}`);
  };

  return (
    <CardContainer onClick={handleClick} onDoubleClick={handleDoubleClick}>
      <Name> {name.toUpperCase()}</Name>

      <Pokeball src={pokeball} alt="pokeball" />
    </CardContainer>
  );
};

export { Component as Card };
export default Component;
