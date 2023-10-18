import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 10px;
  width: 80%;
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
`;

export const Name = styled.h2`
  color: ${(props) => props.theme.colors.borderColor};
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.borderColor};
`;

export const Span = styled.span`
  font-size: 1.2rem;
  font-weight: normal;
`;

export const Paragraph = styled.p`
  font-weight: bold;
  font-size: 1.3rem;
`;

export const TypeContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const PowerContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
  }

  div p {
    font-weight: bold;
    font-size: 1.3rem;
  }

  div span {
    font-size: 1.2rem;
    font-weight: normal;
  }
`;

export const AbilitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
