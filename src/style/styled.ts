import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      backgroundPrimary: string;
      backgroundInput: string;
      primaryColor: string;
      borderColor: string;
      backgroundCardHover: string;
      backgroundCardActive: string;

    };
  }
}
