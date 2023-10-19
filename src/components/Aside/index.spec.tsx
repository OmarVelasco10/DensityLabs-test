import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

import Component from "./";
import { WrapperTest } from "../../__test_mocks__/WrapperTest";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("Aside", () => {
  it("Should render Aside container", () => {
    render(
      <WrapperTest>
        <Provider store={store}>
          <Component />
        </Provider>
      </WrapperTest>
    );
    expect(screen.getByTestId("aside-container-id")).toBeInTheDocument();
  });

  //   it("Should render the elements", () => {
  //     render(
  //       <WrapperTest>
  //         <Component title="HP" value={50} />
  //       </WrapperTest>
  //     );

  //     expect(screen.getByTestId("paragraph-container-id")).toBeInTheDocument();
  //     expect(screen.getByTestId("span-container-id")).toBeInTheDocument();
  //   });
});
