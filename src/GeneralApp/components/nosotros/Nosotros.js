import React from "react";
import { useNavigate } from 'react-router-dom'; 
import "./css/nosotros.css";

const Nosotros = () => {
  const navigate = useNavigate();

  const handleBackhome = () => {
    navigate('/home'); // Redirige al home
  };

  return (
    <div>
      <h1>Sobre Nosotros</h1>
      <button onClick={handleBackhome}>Volver al Home</button>
    </div>
  );
};

export default Nosotros;
