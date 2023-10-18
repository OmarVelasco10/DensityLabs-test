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
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  padding: 10px;
  position: absolute;
  left: 550px;
  top: 20px;
`;
