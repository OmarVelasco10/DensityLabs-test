import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

import Component from "./";
import { WrapperTest } from "../../__test_mocks__/WrapperTest";

describe("Stat", () => {
  const title = "Testing";
  const value = 50;

  it("Should Stat container", () => {
    render(
      <WrapperTest>
        <Component title={title} value={value} />
      </WrapperTest>
    );
    expect(screen.getByTestId("stat-container-id")).toBeInTheDocument();
  });

  it("Should render the elements", () => {
    render(
      <WrapperTest>
        <Component title={title} value={value} />
      </WrapperTest>
    );

    expect(screen.getByTestId("infoItem-container-id")).toBeInTheDocument();
    expect(screen.getByTestId("stat-input-id")).toBeInTheDocument();
  });

  it("Should render the input and should have the value", () => {
    render(
      <WrapperTest>
        <Component title={title} value={value} />
      </WrapperTest>
    );

    const inputElement = screen.getByTestId("stat-input-id");

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(value.toString());
  });
});
