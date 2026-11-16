import {useState, useEffect} from "react";
import type {Character} from "../interfaces/Characters.ts";



export default function Disney(){

    //will set the current disney character
    const [characters, setCharacters] = useState<Character[]>([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function getCharacters() {
            const response = await fetch(`https://api.disneyapi.dev/character?page=${page}`);
            //reads the response stream and tells Typescript to wait before moving on to the next line of code
            const jsonResponse = await response.json();

            setCharacters(jsonResponse.data);
        }

        getCharacters().catch((error) => console.log(error));

    }, [page]) //useeffect will only run after the page changes

    // HTML
    return(
        <>
            <h1>DISNEY CHARACTERS</h1>

            <label>Select Page Number: </label>
            <input
                type = "number"
                value={page}
                onChange = {(e) => setPage(e.target.valueAsNumber)}
                max = {149}
                min = {1}
            ></input>

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