import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const Main = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
