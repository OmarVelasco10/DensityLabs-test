import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

import Component from "./";
import { WrapperTest } from "../../../__test_mocks__/WrapperTest";
describe("Paragraph", () => {
  it("Should render Paragraph Container", () => {
    render(
      <WrapperTest>
        <Component>
          <span>Testing</span>
        </Component>
      </WrapperTest>
    );
    expect(screen.getByTestId("paragraph-container-id")).toBeInTheDocument();
  });

  it("Should render the children", () => {
    render(
      <WrapperTest>
        <Component>
          <span data-testid="children-element">Testing</span>
        </Component>
      </WrapperTest>
    );
    const spanElement = screen.getByTestId("children-element");

    expect(spanElement).toBeInTheDocument();
    expect(spanElement.textContent).toBe("Testing");
  });
});
