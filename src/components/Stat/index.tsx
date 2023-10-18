import { Paragraph, Span } from "../CardDetails/styled";
import { MainContainer } from "./styled";

interface StatProps {
    value: number | undefined
}

const Component = ({value}: StatProps) => {
  return (
    <MainContainer>
      <Paragraph>
        hp: <Span>{value !== undefined ? value : "N/A"}</Span>
      </Paragraph>{" "}
      <input readOnly type="range" name={value !== undefined ? value!.toString() : "0"} min="0" max="100" value={value !== undefined ? value : 0} />
    </MainContainer>
  );
};

export { Component as Stat };
export default Component;
