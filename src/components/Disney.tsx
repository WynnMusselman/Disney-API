import {useState, useEffect} from "react";
import type {Character} from "../interfaces/Characters.ts";


export default function Disney(){

    //will set the current disney character
    const [character, setCharacter] = useState<Character[]>([]);

    useEffect(() => {
        async function getCharacters() {
            const response = await fetch(`https://api.disneyapi.dev/character`);
            //reads the response stream and tells Typescript to wait before moving on to the next line of code
            const jsonResponse = await response.json();
        }
    })
}