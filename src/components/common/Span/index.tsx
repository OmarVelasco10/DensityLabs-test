import { Span } from "./styled";

interface SpanProps {
  children: React.ReactNode;
}

const Component = ({ children }: SpanProps) => {
  return <Span>{children}</Span>;
};

export { Component as Span };
export default Component;
