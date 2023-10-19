import { Paragraph, Span } from "../CardDetails/styled";
import { Input } from "./syled";

interface StatProps {
  title: string | undefined;
  value: number | undefined;
}

const Component = ({ value, title }: StatProps) => {
  const statValue = value ?? "N/A";
  return (
    <div>
      <Paragraph>
        {title}: <Span>{statValue}</Span>
      </Paragraph>{" "}
      <Input
        readOnly
        type="range"
        name={statValue.toString()}
        min="0"
        max="100"
        value={statValue.toString()}
      />
    </div>
  );
};

export { Component as Stat };
export default Component;
