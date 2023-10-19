import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

import Component from "./";
import { WrapperTest } from "../../__test_mocks__/WrapperTest";

describe("Header", () => {
  const query = "Testing";
  const setQuery = jest.fn();

  it("Should render Header container", () => {
    render(
      <WrapperTest>
        <Component query={query} setQuery={setQuery} />
      </WrapperTest>
    );
    expect(screen.getByTestId("header-container-id")).toBeInTheDocument();
  });

  it("Should render the Input and have the correct value", () => {
    render(
      <WrapperTest>
        <Component query={query} setQuery={setQuery} />
      </WrapperTest>
    );

    const inputElement = screen.getByTestId("header-input-id"); 

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(query);
  });
});
