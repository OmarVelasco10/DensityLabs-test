import { Header, Input } from "./styled";

interface HeaderProps {
  query: string;
  setQuery: (query: string) => void;
}
const Component = ({ query, setQuery }: HeaderProps) => {
  return (
    <Header data-testid="header-container-id">
      <Input
        data-testid="header-input-id"
        placeholder="Search a Pokemon on this page"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </Header>
  );
};

export { Component as Header };
export default Component;
