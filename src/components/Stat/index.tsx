import { Paragraph, Span } from "../CardDetails/styled";

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
      <input
        readOnly
        type="range"
        name={statValue.toString()}
        min="0"
        max="100"
        value={statValue}
      />
    </div>
  );
};

export { Component as Stat };
export default Component;
