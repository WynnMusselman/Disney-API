import {createGlobalStyle} from "styled-components";


const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #afd3f3;
    }
    
    main{
        min-height: 100vh;
    }

`

export default function GlobalStyle(){
    return(
        <GlobalStyles/>
    )
}