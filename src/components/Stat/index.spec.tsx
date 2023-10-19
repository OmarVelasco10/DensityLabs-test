import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

import { WrapperTest } from "../../__test_mocks__/WrapperTest";
import Component from "./";

describe("Stat", () => {
  const mountComponent = () => {
    return render(
      <WrapperTest>
        <Component title={title} value={value} />
      </WrapperTest>
    );
  };

  const title = "Testing";
  const value = 50;

  it("Should Stat container", () => {
    mountComponent();

    expect(screen.getByTestId("stat-container-id")).toBeInTheDocument();
  });

  it("Should render the elements", () => {
    mountComponent();

    expect(screen.getByTestId("infoItem-container-id")).toBeInTheDocument();
    expect(screen.getByTestId("stat-input-id")).toBeInTheDocument();
  });

  it("Should render the input and should have the value", () => {
    mountComponent();

    const inputElement = screen.getByTestId("stat-input-id");

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(value.toString());
  });
});
