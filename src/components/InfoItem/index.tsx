import { Paragraph, Span } from "../CardDetails/styled";

interface InfoItemProps {
  title: string | undefined;
  value: number | undefined;
}

const Component = ({ value, title }: InfoItemProps) => {
  return (
    <Paragraph>
      {title}:<Span>{value}</Span>
    </Paragraph>
  );
};

export { Component as InfoItem };
export default Component;
