import { Header, Input } from "./styled";

interface HeaderProps {
  query: string;
  setQuery: (query: string) => void;
}
const Component = ({ query, setQuery }: HeaderProps) => {
  return (
    <Header>
      <Input
        placeholder="Search a Pokemon"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </Header>
  );
};

export { Component as Header };
export default Component;
