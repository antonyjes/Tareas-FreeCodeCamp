import React from "react";
import '../styles/Formulario.css';

function Formulario(props){
    return(
        <form className="tarea-formulario">
            <input type="text" className="tarea-input" placeholder="Escribe una tarea" name="texto"/>
            <button className="tarea-boton" type="submit">Agregar</button>
        </form>
    )
}

export default Formulario;