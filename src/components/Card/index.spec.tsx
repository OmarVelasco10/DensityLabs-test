import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";

import { WrapperTest } from "../../__test_mocks__/WrapperTest";
import Component from "./";

const mockedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

jest.mock("../../store/pokemons", () => {
  return { currentPokemon: jest.fn((name) => name) };
});

jest.mock("../../hooks/useAppDispatch", () => {
  return {
    useAppDispatch: () => jest.fn(),
  };
});

describe("Card", () => {
  const mountComponent = () => {
    return render(
      <WrapperTest>
        <Component name="pikachu" />
      </WrapperTest>
    );
  };

  it("Should render the card container", () => {
    mountComponent();
    expect(screen.getByTestId("pokemon-card-id")).toBeInTheDocument();
  });

  it("clicking pokemon card one time", () => {
    mountComponent();
    fireEvent.click(screen.getByTestId("pokemon-card-id"));
    expect(screen.getByText("PIKACHU")).toBeInTheDocument();
  });

  it("clicking pokemon card two time", () => {
    mountComponent();
    fireEvent.dblClick(screen.getByTestId("pokemon-card-id"));
    expect(mockedNavigate).toHaveBeenCalledWith("/pokemons/pikachu");
  });
});
