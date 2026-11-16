import { Routes, Route } from "react-router";
import Disney from "./mains/Disney.tsx";
import Nav from "./Nav.tsx";
import Home from "./mains/Home.tsx";
import GlobalStyle from "./GlobalStyles.tsx";

export default function Root(){
    return(
        <>
            <GlobalStyle/>

            <Nav />
            <Routes>
                <Route path={"/"} element = {<Home/>}/>
                <Route path = {"/disney"} element = {<Disney/>}/>
            </Routes>
        </>
    )
}
