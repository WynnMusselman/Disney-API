import {createGlobalStyle} from "styled-components";


const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #afd3f3;
    }

`

export default function GlobalStyle(){
    return(
        <GlobalStyles/>
    )
}