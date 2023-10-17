import pokeapiLogo from '../../assets/pokeapiLogo.png';
import pikachu from '../../assets/pikachu.png';
import { LogoContainer, MainContainer, PokemonContainer } from "./styled";

const Component = () => {
  
    return (
        <MainContainer>
        <LogoContainer>
            <img src={pokeapiLogo} alt='pokemon'/>
          </LogoContainer>
          <PokemonContainer>
            <img src={pikachu} alt='pikachu'/>
          </PokemonContainer>
        </MainContainer>
    )
  }
  
  export { Component as Aside };
  export default Component;