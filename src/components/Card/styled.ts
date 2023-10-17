import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const Pokeball = styled.img`
  width: 20px;
  height: 20px;
`;

export const Name = styled.span`
  font-weight: bold;
`;
