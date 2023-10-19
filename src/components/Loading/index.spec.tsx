import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

import { WrapperTest } from "../../__test_mocks__/WrapperTest";
import Component from "./";

describe("Loading", () => {
  const mountComponent = () => {
    return render(
      <WrapperTest>
        <Component />
      </WrapperTest>
    );
  };

  it("Should render Loading container", () => {
    mountComponent();
    expect(screen.getByTestId("loading-container-id")).toBeInTheDocument();
  });

  it("Should render the Image and the correct alt", () => {
    mountComponent();

    const imgElement = screen.getByTestId("loading-img-id");

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("alt", "loading");
  });
});
