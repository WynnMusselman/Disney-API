import {createGlobalStyle} from "styled-components";


const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        box-sizing: border-box;
    }
`

export default function GlobalStyle(){
    return(
        <GlobalStyles/>
    )
}