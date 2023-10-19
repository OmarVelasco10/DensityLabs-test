import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";

import Component from "./";
import { WrapperTest } from "../../__test_mocks__/WrapperTest";
import { MemoryRouter } from "react-router-dom";

jest.mock("../../store/pokemons", () => {
  return { currentPokemon: jest.fn((name) => name) };
});

jest.mock("react-router-dom", () => {
  return { useNavigate: jest.fn() };
});

jest.mock("../../hooks/useAppDispatch", () => {
  return {
    useAppDispatch: () =>
      jest.fn((cb) => {
        console.log({ cb });
      }),
  };
});

describe("Card ", () => {
  it("clicking pokemon card one time", () => {
    render(
      <WrapperTest>
        <Component name="pikachu" />
      </WrapperTest>
    );
    fireEvent.click(screen.getByTestId("pokemon-card-id"));

    // expect(screen.queryByText("PIKACHU")).toBeInTheDocument();
  });

//   it("clicking pokemon card two time", () => {
//     render(
//         <MemoryRouter>
//           <Component name="pikachu" />Ï
//         </MemoryRouter>
//     );
//     fireEvent.dblClick(screen.getByTestId("pokemon-card-id"));

//     expect(screen.getByText("PIKACHU")).toBeInTheDocument();
//   });
});
