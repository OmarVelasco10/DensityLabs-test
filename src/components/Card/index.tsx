import { CardContainer, Name, Pokeball } from "./styled";
import pokeball from '../../assets/pokeball.png';


interface CardProps {
    name: string
}

const Component = (props: CardProps) => {
    const { name } = props;
  
    return (
      <CardContainer>
        <Name> {name.toUpperCase()}</Name>
       
        <Pokeball src={pokeball} alt="pokeball"/>
      </CardContainer>
    )
  }
  
  export { Component as Card };
  export default Component;