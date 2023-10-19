import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr;
  @media (max-width: 425px)  {
    grid-template-columns: 1fr;
  }
`;

export const Main = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px)  {
    padding: 0px;
  }
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  padding: 10px;
`;
