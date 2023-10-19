import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

import Component from "./";
import { WrapperTest } from "../../../__test_mocks__/WrapperTest";
describe("InfoItem", () => {
    const message = "Testing message";
  it("Should render InfoItem container", () => {
    render(
      <WrapperTest>
        <Component  message={message}/>
      </WrapperTest>
    );
    expect(screen.getByTestId("errorMessage-container-id")).toBeInTheDocument();
  });

  it("Should render the Paragraph", () => {
    render(
      <WrapperTest>
        <Component  message={message}/>
      </WrapperTest>
    );

    expect(screen.getByTestId("paragraph-container-id")).toBeInTheDocument();
  });
});
