import React from "react";
import Formulario from "./Formulario";
import '../styles/ListaDeTareas.css';

function ListaDeTareas(){
    return (
        <>
            <Formulario />
            <div className="tareas-lista-contenedor">
                Lista de Tareas
            </div>
        </>
    );
}

export default ListaDeTareas;