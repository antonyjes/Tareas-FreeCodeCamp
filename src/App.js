import "./App.css";
import ListaDeTareas from "./componentes/ListaDeTareas";
import freeCodeCampLogo from "./images/FreeCodeCamp_logo.svg.png";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="logo de freecodecamp"
        />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
