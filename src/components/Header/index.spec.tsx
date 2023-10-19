import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

import { WrapperTest } from "../../__test_mocks__/WrapperTest";
import Component from "./";

describe("Header", () => {
  const mountComponent = () => {
    return render(
      <WrapperTest>
        <Component query={query} setQuery={setQuery} />
      </WrapperTest>
    );
  };

  const query = "Testing";
  const setQuery = jest.fn();

  it("Should render Header container", () => {
    mountComponent();

    expect(screen.getByTestId("header-container-id")).toBeInTheDocument();
  });

  it("Should render the Input and have the correct value", () => {
    mountComponent();

    const inputElement = screen.getByTestId("header-input-id");

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(query);
  });
});
