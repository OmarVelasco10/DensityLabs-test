import { useNavigate } from "react-router-dom";

import { currentPokemon } from "../../store/pokemons";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { pokeball } from "../../assets";

import { CardContainer, Name, Pokeball } from "./styled";

interface CardProps {
  name: string;
}

const Component = ({ name }: CardProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('click');
    dispatch(currentPokemon(name));
  };

  const handleDoubleClick = () => {
    navigate(`/pokemons/${name}`);
  };

  return (
    <CardContainer data-testid="pokemon-card-id" onClick={handleClick} onDoubleClick={handleDoubleClick}>
      <Name> {name.toUpperCase()}</Name>

      <Pokeball src={pokeball} alt="pokeball" />
    </CardContainer>
  );
};

export { Component as Card };
export default Component;
