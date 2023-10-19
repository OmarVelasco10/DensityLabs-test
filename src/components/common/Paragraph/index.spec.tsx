import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

import { WrapperTest } from "../../../__test_mocks__/WrapperTest";
import Component from "./";

describe("Paragraph", () => {
  const mountComponent = () => {
    return render(
      <WrapperTest>
        <Component>
          <span data-testid="children-element">Testing</span>
        </Component>
      </WrapperTest>
    );
  };

  it("Should render Paragraph Container", () => {
    mountComponent();

    expect(screen.getByTestId("paragraph-container-id")).toBeInTheDocument();
  });

  it("Should render the children", () => {
    mountComponent();

    const spanElement = screen.getByTestId("children-element");

    expect(spanElement).toBeInTheDocument();
    expect(spanElement.textContent).toBe("Testing");
  });
});
