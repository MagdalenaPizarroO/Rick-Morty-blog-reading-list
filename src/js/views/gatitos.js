import React from "react";
import { Link } from "react-router-dom";

export const Gatitos = () => {
    const gatitos = ["Jannis", "Linux", "Sylvannas", "Reina", "Simón"];
    return (
        <div className="text-center mt-5">
            <h1>Hello Cats!</h1>
            <p>
                <img src="https://www.feelcats.com/wp-content/uploads/2019/03/gatitos.jpg"/>
            </p>
            {gatitos.map((gatito, index)=>{
                return <Link to={"/saludar/"+gatito}>
                        <button className="btn btn-outline-info">{gatito}</button>
                    </Link>
                    
            })}

        </div>
    )

}