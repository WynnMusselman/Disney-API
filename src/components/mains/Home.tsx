import styled from "styled-components";

const MainStyled = styled.main`
    text-align: center;
`

const ImgStyled = styled.img`
    max-width: 95vw;
`


export default function Home(){
    return(
        <MainStyled>
            <ImgStyled src = "https://cdn.jwplayer.com/v2/media/laswKJQo/poster.jpg?width=1280" alt = "Cinderella's castle in Disney Theme Park"/>
        </MainStyled>
    )
}
