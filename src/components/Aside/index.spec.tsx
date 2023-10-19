import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

import { WrapperTest } from "../../__test_mocks__/WrapperTest";
import { ReduxProvider } from "../../__test_mocks__/ReduxProvider";
import Component from "./";

describe("Aside", () => {
  const mountComponent = () => {
    return render(
      <WrapperTest>
        <ReduxProvider>
          <Component />
        </ReduxProvider>
      </WrapperTest>
    );
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should render Aside container", () => {
    mountComponent();
    expect(screen.getByTestId("aside-container-id")).toBeInTheDocument();
  });

  it("Should render the elements", () => {
    mountComponent();

    expect(screen.getByTestId("aside-logo-id")).toBeInTheDocument();
    expect(
      screen.getByTestId("aside-pokemon-container-id")
    ).toBeInTheDocument();
  });

  it("Should render pikachu image", () => {
    mountComponent();

    jest
      .spyOn(require("../../hooks/useAppSelector"), "useAppSelector")
      .mockReturnValue({
        pokemon: null,
      });

    expect(screen.getByAltText("pikachu")).toBeInTheDocument();
  });

  it("Should render the pokemon image", () => {
    const pokemonState = {
      name: "bulbasaur",
      url: "...",
    };

    jest
      .spyOn(require("../../hooks/useAppSelector"), "useAppSelector")
      .mockReturnValue({
        pokemon: pokemonState,
      });
    mountComponent();

    expect(screen.getByAltText(pokemonState.name)).toBeInTheDocument();
  });
});
