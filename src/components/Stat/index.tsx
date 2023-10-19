
import { InfoItem } from "../common/InfoItem";
import { Input } from "./syled";

interface StatProps {
  title?: string;
  value?: number;
}

const Component = ({ value, title }: StatProps) => {
  const statValue = value ?? "N/A";
  return (
    <div data-testid="stat-container-id">
        <InfoItem title={title} value={statValue}/>
     
      <Input
        data-testid="stat-input-id"
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
