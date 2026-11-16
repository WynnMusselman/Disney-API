import { Routes, Route } from "react-router";
import Disney from "./Disney.tsx";
import Nav from "./Nav.tsx";

export default function Root(){
    return(
        <>
            <Nav />
            <Routes>
                <Route path = {"/"} element = {<Disney/>}/>
            </Routes>
        </>
    )
}
