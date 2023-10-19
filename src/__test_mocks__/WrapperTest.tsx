import React from "react";
import { ThemeProvider } from "styled-components";
import { theme as Theme } from '../style/theme';

interface WrapperProps {
    children: React.ReactNode;
    theme?: any;
}

function Component({ children, theme = Theme  }: WrapperProps) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export { Component as WrapperTest };
export default Component;
