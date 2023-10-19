import { Paragraph } from "../Paragraph";
import { MainContainer } from "./styled";

interface ErrorMessageProps {
  message: string;
}

const Component = ({ message }: ErrorMessageProps) => {
  return (
    <MainContainer data-testid="errorMessage-container-id">
      <Paragraph>{message}</Paragraph>
    </MainContainer>
  );
};

export { Component as ErrorMessage };
export default Component;
