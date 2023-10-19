import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

import { WrapperTest } from "../../../__test_mocks__/WrapperTest";
import Component from "./";

describe("InfoItem", () => {
  const mountComponent = () => {
    return render(
      <WrapperTest>
        <Component title="HP" value={50} />
      </WrapperTest>
    );
  };

  it("Should render InfoItem container", () => {
    mountComponent();
    expect(screen.getByTestId("infoItem-container-id")).toBeInTheDocument();
  });

  it("Should render the elements", () => {
    mountComponent();

    expect(screen.getByTestId("paragraph-container-id")).toBeInTheDocument();
    expect(screen.getByTestId("span-container-id")).toBeInTheDocument();
  });
});
