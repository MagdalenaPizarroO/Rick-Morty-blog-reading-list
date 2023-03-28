import React from "react";
import { useParams } from "react-router-dom";

export const Saludar = () => {
    const param = useParams();

    return <h1>Hola {param.nombre}</h1>
}