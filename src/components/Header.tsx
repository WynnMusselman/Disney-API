import styled from "styled-components";

const H1Styled = styled.h1`
    font: calc(2px + 4vw) disneyFont, "Comic Sans MS", sans-serif;
    text-align: center;
    color: aliceblue;
`

export default function Header(){
    return(
        <>
            <header>
                <H1Styled>Disney API</H1Styled>
            </header>
        </>
    )
}
