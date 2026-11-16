import { Routes, Route } from "react-router";
import Disney from "./mains/Disney.tsx";
import Nav from "./Nav.tsx";
import Home from "./mains/Home.tsx";
import GlobalStyle from "./GlobalStyles/GlobalStyles.tsx";
import Header from "./Header.tsx";
import GlobalFonts from "./GlobalStyles/GlobalFonts.tsx";
import styled from "styled-components";

const NavHeaderWrapper = styled.div`
    background-color: #14415c;
    padding: 1%;
    margin-bottom: 1%;
`;

export default function Root(){
    return(
        <>
            {/*global styling*/}
            <GlobalStyle/>
            <GlobalFonts/>

            <NavHeaderWrapper>
                <Header />
                <Nav />
            </NavHeaderWrapper>

            <Routes>
                <Route path={"/"} element = {<Home/>}/>
                <Route path = {"/disney"} element = {<Disney/>}/>
            </Routes>
        </>
    )
}
