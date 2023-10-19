import { Paragraph } from "./styled";

interface ParagraphProps {
  children: React.ReactNode;
}

const Component = ({ children }: ParagraphProps) => {
  return <Paragraph>{children}</Paragraph>;
};

export { Component as Paragraph };
export default Component;
