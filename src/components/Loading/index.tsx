import { pokeballGif } from "../../assets";

import { LoadingContainer, LoadingImg } from "./styled";

const Component = () => {
  return (
    <LoadingContainer data-testid="loading-container-id">
      <LoadingImg data-testid="loading-img-id" src={pokeballGif} alt="loading" />
    </LoadingContainer>
  );
};

export { Component as Loading };
export default Component;
