import React from "react";
import { useParams } from "react-router-dom";

export const Saludar = () => {
    const param = useParams();
// param es un objeto
/*    param = {
        nombre: "" => ese valor lo damos cuando creamos el path en layout :)
    }
*/
    return <h1>Hola {param.nombre}</h1>
}