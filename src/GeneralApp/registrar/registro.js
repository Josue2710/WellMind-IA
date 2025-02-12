import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para la redirección
import WellMindIA from "../assets/logo principal/wellmind logo.png"; // Importa el logo
import "../css/registro.css"; // Importa el archivo CSS

const Registro = () => {
  const navigate = useNavigate(); // Inicializa useNavigate y asigna a la variable `navigate`

  // Función para redirigir al login
  const handleLoginRedirect = () => {
    navigate("/"); // Usa la variable `navigate` para redirigir
  };

  return (
    <div className="registro">
      <div className="container-registro">
        <div className="logo-container">
          <img src={WellMindIA} alt="Logo" className="logo-registro" />
        </div>

        <div className="card-register">
          <div className="form-container">
            <h1>Registro</h1>

            {/* Inputs */}
            <input type="text" placeholder="Usuario" className="usuregistro" />
            <input
              type="password"
              placeholder="Contraseña"
              className="passregistro"
            />
            <input
              type="password"
              placeholder="Repetir Contraseña"
              className="resspassregistro"
            />

            {/* Botón */}
            <button className="button third">Registrarse</button>

            {/* Texto para redirigir al login */}
            <div
              className="forgot-password"
              onClick={handleLoginRedirect} // Asocia la función al evento onClick
            >
              Ya tienes un usuario? Iniciar Sesión
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;