import { createGlobalStyle } from 'styled-components';
import disney_font from "../../assets/Walter.ttf";

const GlobalFonts = createGlobalStyle`
    /*damion font*/
    @font-face {
        font-family: disneyFont;
        src: url("${disney_font}");
    }
`;

export default function GlobalFont(){
    return(
        <GlobalFonts/>
    )
}
