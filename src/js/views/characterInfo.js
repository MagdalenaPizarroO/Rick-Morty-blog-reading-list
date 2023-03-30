import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const CharacterInfo = () => {
    const param = useParams();

    const url = "https://rickandmortyapi.com/api/character/";
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setCharacters(data.results))
            .catch((error) => console.log(error));
    }, []);

    return (

        <div>
            <h1>I should see the character ID: {param.id}</h1>
            <p>And now... do I see the card? </p>






            <div className="container-fluid">
                <div className="row">

                    {characters.map((character) => (
                        <div className="col-md-4 mb-4" key={character.id}>
                            <div className="card bg-dark border-success" style={{ width: "18rem" }} key={character.id}>
                                <img src={character.image} className="card-img-top" alt={character.name} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{character.name}</h5>
                                    <p className="card-text">{character.species}</p>
                                    
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </div>



    );

}