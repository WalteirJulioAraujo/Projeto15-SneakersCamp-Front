import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Raleway', sans-serif;
        background-color: ${(props) =>
          props.amILoginOrSingup ? "#0A1931" : "#fff"} ;
    }
`;

export default GlobalStyle;
