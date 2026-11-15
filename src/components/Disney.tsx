import {useState, useEffect} from "react";
import type {Character} from "../interfaces/Characters.ts";


export default function Disney(){

    //will set the current disney character
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        async function getCharacters() {
            const response = await fetch(`https://api.disneyapi.dev/character`);
            //reads the response stream and tells Typescript to wait before moving on to the next line of code
            const jsonResponse = await response.json();

            setCharacters(jsonResponse.data);
        }

        getCharacters().catch((error) => console.log(error));

    }, []) //useeffect will only run after intial render

    // HTML
    return(
        <>
            <h1>DISNEY CHARACTERS</h1>

            <div>
                {
                    characters.map((character: Character) =>
                        <div key = {character._id}>
                            <h2>{character.name}</h2>
                            <img src = {character.imageUrl} alt = {character.name} />
                        </div>
                    )
                }
            </div>
        </>
    )
}