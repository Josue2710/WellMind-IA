import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/nosotros.css";
import mind from "../img/wellmind logo.png";
import mision from "./img/Mision.png";
import valores from "./img/valores.png";
import vision from "./img/vision.png";

const Nosotros = () => {
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
<<<<<<< HEAD
=======
  };

  const handlecontac = () => {
    navigate("/contacto");
>>>>>>> 2eec43f037a51111ea693f2bac3f891e1e7835b9
  };

  return (
    <div className="home-container">
      {/* Encabezado */}
      <header className="header">
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

      <section className="sobre-nosotros">
        <div className="contenido">
          <h2>Sobre Nosotros</h2>
          <hr />
          <p>
            Somos un grupo de jóvenes apasionados por la tecnología y el bienestar mental. 
            Con WellMind IA, hemos creado una plataforma que usa inteligencia artificial 
            para analizar emociones y ofrecer herramientas personalizadas que fortalecen el 
            bienestar emocional. Nuestra misión es hacer que el cuidado de la salud mental 
            sea accesible, innovador y efectivo, eliminando barreras y fomentando el autoconocimiento. 
            Creemos en un mundo donde cuidar de nuestra mente sea una prioridad, no un lujo. 
          </p>
        </div>

        {/* SVGfondo */}
        <svg className="fondo-svg" viewBox="0 0 1481 166" xmlns="http://www.w3.org/2000/svg">
          <path fill="rgba(34, 187, 167, 1)" d="M 0 166 C 226.5 166 226.5 82 453 82 L 453 82 L 453 0 L 0 0 Z" strokeWidth="0"></path>
          <path fill="rgba(34, 187, 167, 1)" d="M 452 82 C 609 82 609 129 766 129 L 766 129 L 766 0 L 452 0 Z" strokeWidth="0"></path>
          <path fill="rgba(34, 187, 167, 1)" d="M 765 129 C 923 129 923 65 1081 65 L 1081 65 L 1081 0 L 765 0 Z" strokeWidth="0"></path>
          <path fill="rgba(34, 187,167, 1)" d="M 1080 65 C 1280.5 65 1280.5 166 1481 166 L 1481 166 L 1481 0 L 1080 0 Z" strokeWidth="0"></path>
        </svg>
      </section>




      <section className="mision-vision-valores">
      <div className="card">
        <img src={mision} alt="Misión" />
        <h3>Misión</h3>
        <span>
          Brindar una plataforma innovadora que combine tecnología avanzada e 
          inteligencia artificial para mejorar el bienestar emocional y mental 
          de las personas, ofreciendo herramientas personalizadas que promuevan 
          el autoconocimiento, la relajación y el desarrollo personal.

        </span>
      </div>

      <div className="card">
        <img src={vision} alt="Visión" />
        <h3>Visión</h3>
        <span>
          Ser la plataforma líder en bienestar digital, reconocida por su impacto 
          positivo en la vida de las personas. Integrando tecnología de vanguardia 
          para ofrecer experiencias transformadoras y accesibles en todo el mundo
        </span>
      </div>

      <div className="card">
        <img src={valores} alt="Valores" />
        <h3>Valores</h3>
        <ul>
          <li><strong>Innovación:</strong> Mejoramos continuamente con tecnología avanzada.</li>
          <li><strong>Bienestar:</strong> Promovemos el equilibrio emocional y mental.</li>
          <li><strong>Accesibilidad:</strong> Diseño fácil de usar para todos.</li>
          <li><strong>Empatía:</strong> Entendemos y apoyamos a nuestros usuarios.</li>
          <li><strong>Confidencialidad:</strong> Garantizamos privacidad y seguridad.</li>
        </ul>
      </div>
    </section>
    </div>
  );
};

export default Nosotros;
