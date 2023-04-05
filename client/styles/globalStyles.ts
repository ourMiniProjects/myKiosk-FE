import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    /* font-family: "myfont"; */
  }

  @font-face {
    font-family: "myfont";
    src: url("/font/FlyingBird.otf");
  }
`;
