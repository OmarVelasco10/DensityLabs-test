import { Paragraph, Span } from "../CardDetails/styled";

interface StatProps {
  title: string | undefined;
  value: number | undefined;
}

const Component = ({ value, title }: StatProps) => {
  return (
    <div>
      <Paragraph>
        {title}: <Span>{value !== undefined ? value : "N/A"}</Span>
      </Paragraph>{" "}
      <input
        readOnly
        type="range"
        name={value !== undefined ? value!.toString() : "0"}
        min="0"
        max="100"
        value={value !== undefined ? value : 0}
      />
    </div>
  );
};

export { Component as Stat };
export default Component;
