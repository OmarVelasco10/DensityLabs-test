import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

import Component from "./";
import { WrapperTest } from "../../../__test_mocks__/WrapperTest";
describe("InfoItem", () => {
  it("Should render InfoItem container", () => {
    render(
      <WrapperTest>
        <Component title="HP" value={50} />
      </WrapperTest>
    );
    expect(screen.getByTestId("infoItem-container-id")).toBeInTheDocument();
  });

  it("Should render the elements", () => {
    render(
      <WrapperTest>
        <Component title="HP" value={50} />
      </WrapperTest>
    );

    expect(screen.getByTestId("paragraph-container-id")).toBeInTheDocument();
    expect(screen.getByTestId("span-container-id")).toBeInTheDocument();
  });
});
