import {Link} from "react-router-dom";

import styled from "styled-components";

const NavStyled = styled.nav`
    padding: 3%;
    text-align: center;
`

const UlStyled = styled.ul`
    padding-left: 0;
    list-style: none;
`

const LiStyled = styled.li`
    border: 2px solid #bbbbea;
    padding: 1% 2%;
    margin: 3%;
    display: inline;

    &:hover {
        background-color: #0b3249;
    }
`

const LinkStyled = styled(Link)`
    text-decoration: none;
    color: aliceblue;
    font: calc(2px + 1.4) disneyFont "Comic Sans MS", sans-serif;
`


export default function Nav(){
    return(
        <NavStyled>
            <UlStyled>
                <LiStyled><LinkStyled to = {"/"}>Home</LinkStyled></LiStyled>
                <LiStyled><LinkStyled to = {"/disney"}>See Full List</LinkStyled></LiStyled>
            </UlStyled>
        </NavStyled>
    )
}
