import React, { useState, useEffect } from "react";
import locationsimg from "../../img/locationsimg.jpeg";
import { Link } from "react-router-dom";

export const Card = () => {
    const url = "https://rickandmortyapi.com/api/character/";
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setCharacters(data.results))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">

                {characters.map((character) => (
                    <div className="col-md-4 mb-4" key={character.id}>
                        <div className="card bg-dark border-success" style={{ width: "18rem" }} key={character.id}>
                            <img src={character.image} className="card-img-top" alt={character.name} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{character.name}</h5>
                                <p className="card-text">{character.species}</p>
                                <Link to={"/character/"+character.id}>
                                    <button className="btn btn-outline-success">More Info</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>

    );
};

export const CardLocations = () => {
    const url = "https://rickandmortyapi.com/api/location";
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setLocations(data.results))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">

                {locations.map((location) => (
                    <div className="col-md-4 mb-4" key={location.id}>
                        <div className="card bg-dark border-success" style={{ width: "15rem" }} key={location.id}>
                            <img src={locationsimg} className="card-img-top" alt={location.name} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{location.name}</h5>
                                <p className="card-text">{location.type}</p>
                                <p className="card-text">{location.dimension}</p>
                                <a href="#" className="btn btn-success btn-sm">Go somewhere</a>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};