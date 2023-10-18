import styled from "styled-components";

export const MainContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-right: 1px solid ${(props) => props.theme.colors.borderColor};
`;

export const LogoContainer = styled.div`
  width: 300px;

  img {
    width: 100%;
  }
`;

export const PokemonContainer = styled.div`
  width: 300px;

  img {
    width: 100%;
  }
`;
