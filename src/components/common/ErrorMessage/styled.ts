import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundError};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

    p {
        margin-bottom: 0px;
    }
`;

