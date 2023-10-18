import pokeball from "../../assets/pokeball.png";
import { LoadingContainer, LoadingImg } from "./styled";

const Component = () => {
  return (
    <LoadingContainer>
      <LoadingImg src={pokeball} alt="pokemon" />
    </LoadingContainer>
  );
};

export { Component as Loading };
export default Component;
