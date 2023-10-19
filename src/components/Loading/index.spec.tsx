import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

import Component from "./";
import { WrapperTest } from "../../__test_mocks__/WrapperTest";

describe("Loading", () => {
  it("Should render Loading container", () => {
    render(
      <WrapperTest>
        <Component />
      </WrapperTest>
    );
    expect(screen.getByTestId("loading-container-id")).toBeInTheDocument();
  });

  it("Should render the Image and the correct alt", () => {
    render(
      <WrapperTest>
        <Component />
      </WrapperTest>
    );

    const imgElement = screen.getByTestId("loading-img-id");

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("alt", "loading");
  });
});
