import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        color: #FFF1DC;
        flex-direction: column;
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: 'Rubik', sans-serif;
    }

    *::selection {
        background-color: #d4618956;
    }

    body {
        display: flex;
        background-color: #ffffff;
    }
`