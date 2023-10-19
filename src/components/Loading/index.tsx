import { pokeballGif } from "../../assets";

import { LoadingContainer, LoadingImg } from "./styled";

const Component = () => {
  return (
    <LoadingContainer>
      <LoadingImg src={pokeballGif} alt="pokemon" />
    </LoadingContainer>
  );
};

export { Component as Loading };
export default Component;
