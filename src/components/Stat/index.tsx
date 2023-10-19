
import { InfoItem } from "../common/InfoItem";
import { Input } from "./syled";

interface StatProps {
  title?: string;
  value?: number;
}

const Component = ({ value, title }: StatProps) => {
  const statValue = value ?? "N/A";
  return (
    <div>
        <InfoItem title={title} value={statValue}/>
     
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
