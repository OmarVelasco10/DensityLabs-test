import { Paragraph, Span } from "../";

interface InfoItemProps {
  title?: string;
  value?: number | string;
}

const Component = ({ value, title }: InfoItemProps) => {
  return (
    <div data-testid="infoItem-container-id">
      <Paragraph>
        {title}:<Span>{value}</Span>
      </Paragraph>
    </div>
  );
};

export { Component as InfoItem };
export default Component;
