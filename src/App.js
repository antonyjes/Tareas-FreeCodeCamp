import './App.css';
import Formulario from './componentes/Formulario';
import Tarea from './componentes/Tarea';
import freeCodeCampLogo from './images/FreeCodeCamp_logo.svg.png';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='logo de freecodecamp'/>
      </div>      
      <div className='tareas-lista-principal'>
        <Formulario />
        <h1>Mis tareas</h1>
        <Tarea texto="Aprender React" completada={false}/>
      </div>
    </div>
  );
}

export default App;
