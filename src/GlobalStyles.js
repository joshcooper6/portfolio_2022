import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
        height: 100vh;
        width: 100vw;
        margin: 0 auto;
        text-align: center;
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        background-color: #15202B;
        color: #8899A6;
    }

    img {
        object-fit: cover;
        filter: grayscale(1);
    }

    img:hover {
        transition: ease 1s;
        filter: none;
    }

    h1 {
        font-family: 'Licorice';
        font-size: 3em;
    }

    a {
        text-decoration: none;
        color: #AAAAAA;
    }
`