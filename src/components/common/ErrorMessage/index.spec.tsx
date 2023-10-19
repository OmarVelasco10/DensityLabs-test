import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

import { WrapperTest } from "../../../__test_mocks__/WrapperTest";
import Component from "./";

describe("ErrorMessage", () => {
  const mountComponent = () => {
    return render(
      <WrapperTest>
        <Component message={message} />
      </WrapperTest>
    );
  };

  const message = "Testing message";

  it("Should render ErrorMessage container", () => {
    mountComponent();
    expect(screen.getByTestId("errorMessage-container-id")).toBeInTheDocument();
  });

  it("Should render the Paragraph", () => {
    mountComponent();

    expect(screen.getByTestId("paragraph-container-id")).toBeInTheDocument();
  });
});
