import styled from "styled-components";

const FooterStyled = styled.footer`
    background-color: #14415c;
    text-align: center;
    padding: 1%;
    margin-top: 2%;
`

const PStyled = styled.p`
    font: calc(2px + 1vw) "Comic Sans MS", disneyFont, cursive;
    color: aliceblue;
`

const AStyled = styled.a`
    color: #8ec9ff;
    text-decoration: none;
`


export default function Footer(){
    return (
        <FooterStyled>
            <PStyled>Website Created By Wynn Musselman</PStyled>
            <PStyled>API from <AStyled href = "https://disneyapi.dev/">Disney API</AStyled></PStyled>
        </FooterStyled>
    )
}