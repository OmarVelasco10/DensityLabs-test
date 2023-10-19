import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

import Component from "./";
import { WrapperTest } from "../../../__test_mocks__/WrapperTest";
describe("Span", () => {
  it("Should render Span Container", () => {
    render(
      <WrapperTest>
        <Component>
          Testing
        </Component>
      </WrapperTest>
    );
    expect(screen.getByTestId("span-container-id")).toBeInTheDocument();
  });

  it("Should render the children", () => {
    render(
      <WrapperTest>
        <Component>F
          Testing
        </Component>
      </WrapperTest>
    );
    expect(screen.getByText("Testing")).toBeInTheDocument();
  });

});
