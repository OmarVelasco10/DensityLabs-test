import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

import { WrapperTest } from "../../../__test_mocks__/WrapperTest";
import Component from "./";

describe("Span", () => {
  const mountComponent = () => {
    return render(
      <WrapperTest>
        <Component>Testing</Component>
      </WrapperTest>
    );
  };

  it("Should render Span Container", () => {
    mountComponent();
    expect(screen.getByTestId("span-container-id")).toBeInTheDocument();
  });

  it("Should render the children", () => {
    mountComponent();
    expect(screen.getByText("Testing")).toBeInTheDocument();
  });
});
