import { Paragraph, Span } from "../";

interface InfoItemProps {
  title?: string;
  value?: number | string;
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
