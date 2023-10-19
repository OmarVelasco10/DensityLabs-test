import { Paragraph } from "../Paragraph";
import { MainContainer } from "./styled";

interface ErrorMessageProps {
  message: string;
}

const Component = ({ message }: ErrorMessageProps) => {
  return (
    <MainContainer>
      <Paragraph>{message}</Paragraph>
    </MainContainer>
  );
};

export { Component as ErrorMessage };
export default Component;
