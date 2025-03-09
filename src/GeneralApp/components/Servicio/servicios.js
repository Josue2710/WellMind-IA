import React from "react";
import { useNavigate } from 'react-router-dom'; 
import "./css/Servicios.css";
import mind from "../img/wellmind logo.png";
import Analisis from "./img/Analisis Emocional.png"; 
import Ejercicios from "./img/Ejercicios de mindfulness.png";
import Recursos from "./img/Recursos y recomendaciones.png";
import Rutinas from "./img/Rutinas para el bienestar.png";
import Seguimiento from "./img/Seguimiento de animo.png";
import Terapia from "./img/Terapia Individual.png";

const Servicios = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  const handleUS = () => {
    navigate("/nosotros");
  };

  const handleIA = () => {
    navigate("/ia");
  };

  const handleServis = () => {
    navigate("/servicio");
  };

  const handleAR = () => {
    navigate("/ar");
  };

  return (
    <div className="home-container">
      {/* Encabezado */}
      <header className="header" style={{ width: '1330px' }}>
        <div className="logo-container">
          <img src={mind} alt="Logo" className="logo" />
          <h1 className="logo-text">WellMind IA</h1>
        </div>

        <nav>
          <ul>
            <li onClick={handleClick}>Inicio</li>
            <li onClick={handleUS}>Sobre Nosotros</li>
            <li onClick={handleServis}>Servicios</li>
            <li onClick={handleIA}>IA</li>
            <li onClick={handleAR}>AR</li>
          </ul>
        </nav>
      </header>

      {/* Img */}
      <div className="triangulos-container">
        
          <div className="Analisis">
            <img src={Analisis} alt="Analisis Emocional" />
          </div>

          <div className="Terapia">
            <img src={Terapia} alt="Terapia individual" />
          </div>

          <div className="Ejercicios">
            <img src={Ejercicios} alt="Ejercicios de mindfulness" />
          </div>
        

       
          <div className="Animo">
            <img src={Seguimiento} alt="Seguimiento de animo" />
          </div>
        
          <div className="Rutinas">
            <img src={Rutinas} alt="Rutinas para el bienestar" />
          </div>

          <div className="Recursos">
            <img src={Recursos} alt="Recursos y recomendaciones" />
          </div>
        
        
        
      </div>
    </div>
  );
};

export default Servicios;
