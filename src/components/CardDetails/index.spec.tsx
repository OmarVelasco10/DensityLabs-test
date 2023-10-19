import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

import { WrapperTest } from "../../__test_mocks__/WrapperTest";
import { ReduxProvider } from "../../__test_mocks__/ReduxProvider";
import { PokemonDetails } from "../../types/types";
import Component from "./";

jest.mock("../../hooks/useAppSelector", () => {
  return {
    useAppSelector: () => jest.fn(),
  };
});

describe("Card Details", () => {
  const mountComponent = () => {
    return render(
      <WrapperTest>
        <ReduxProvider>
          <Component />
        </ReduxProvider>
      </WrapperTest>
    );
  };

  it("Should render the Error Message", () => {
    mountComponent();

    expect(screen.getByText("Error to fetch Pokemon")).toBeInTheDocument();
  });

  it("Should render cardDetails container and the elements", () => {
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

    expect(screen.getByTestId("cardDetails-container-id")).toBeInTheDocument();
    expect(screen.getByTestId("cardDetails-name-id")).toBeInTheDocument();

    expect(
      screen.getByTestId("cardDetails-type-container-id")
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("cardDetails-info-container-id")
    ).toBeInTheDocument();
    expect(

      screen.getByTestId("cardDetails-power-container-id")
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("cardDetails-stats-container-id")
    ).toBeInTheDocument();
    
    expect(
      screen.getByTestId("cardDetails-abilities-container-id")
    ).toBeInTheDocument();
  });

  it("Should render the correct information", () => {
    const pokemonInformation: PokemonDetails = {
      name: "bulbasaur",
      url: "...",
      attack: 49,
      defense: 49,
      height: 7,
      hp: 45,
      weight: 69,
      speed: 45,
      specialAttack: 65,
      specialDefense: 65,
      abilities: [
        {
          ability: {
            name: "overgrow",
            url: "https://pokeapi.co/api/v2/ability/65/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "chlorophyll",
            url: "https://pokeapi.co/api/v2/ability/34/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    };

    jest
      .spyOn(require("../../hooks/useAppSelector"), "useAppSelector")
      .mockReturnValue({
        pokemon: pokemonInformation,
      });
    mountComponent();

    expect(
      screen.getByText(pokemonInformation.name.toUpperCase())
    ).toBeInTheDocument();

    const hpAndSpeed = screen.getAllByText("45");
    expect(hpAndSpeed.length).toBe(2);

    const specialAttacks = screen.getAllByText("65");
    expect(specialAttacks.length).toBe(2);

    expect(screen.getByText("overgrow")).toBeInTheDocument();
    expect(screen.getByText("grass")).toBeInTheDocument();
  });
});
