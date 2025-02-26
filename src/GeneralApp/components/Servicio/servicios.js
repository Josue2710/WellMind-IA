import React from "react";
import { useNavigate } from 'react-router-dom'; 
import "./css/Servicios.css";
import mind from "../img/wellmind logo.png";

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
  
  const handlecontac = () => {
    navigate("/contacto");
  };
  
    return (
      <div className="home-container">
        {/* Encabezado */}
        <header 
          className="header" 
          style={{ 
            width: '1330px'
          }}
        >
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
              <li onClick={handlecontac}>Contactos</li>
            </ul>
          </nav>
        </header>
    </div>
  );
};

export default Servicios;
