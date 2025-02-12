import React from "react";
import { useNavigate } from 'react-router-dom';
import "./css/vermas.css";
import { motion } from "framer-motion";

const Vermas = () => {
  const navigate = useNavigate();

  const handleBackMas = () => {
    navigate('/home'); // Redirige al home
  };

  const handleNavigate = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' }); // Desplaza la página hacia la sección correspondiente
  };

  return (
    <div>
      <header className="navbar">
        <div className="navbar-logo">
          <h2>WellMind IA</h2>
        </div>
        <nav className="navbar-menu">
          <ul>
            <li><button onClick={() => handleNavigate('mision')}>Misión</button></li>
            <li><button onClick={() => handleNavigate('vision')}>Visión</button></li>
            <li><button onClick={() => handleNavigate('valores')}>Valores</button></li>
            <li><button onClick={() => handleNavigate('innovacion')}>Innovación</button></li>
          </ul>
        </nav>
      </header>

      <main>
        
        <div className="section-container" id="mision">
          <h2>Misión</h2>
          <p>Nos guiamos por principios sólidos que nos impulsan a buscar siempre la innovación...</p>
        </div>

        <div className="section-container" id="vision">
          <h2>Visión</h2>
          <p>Nuestra visión es transformar la forma en que las personas interactúan con la tecnología...</p>
        </div>

        <div className="section-container" id="valores">
          <h2>Valores</h2>
          <p>Nos guiamos por principios sólidos que nos impulsan a buscar siempre la innovación...</p>
        </div>

        <div className="section-container" id="innovacion">
          <h2>Innovación</h2>
          <p>Nos guiamos por principios sólidos que nos impulsan a buscar siempre la innovación...</p>
        </div>


        <div className="justify-center">
          <button onClick={handleBackMas}>Volver al Home</button>
        </div>
      </main>
    </div>
  );
};

export default Vermas;
