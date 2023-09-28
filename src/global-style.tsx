import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Hanken Grotesk';
    }

    body {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a {
        text-decoration: none;
    }
    
    ul, ol {
        list-style: none;
    }

    button {
        border: 0;
        outline: none;
    }

`