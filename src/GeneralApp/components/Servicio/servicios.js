import React from "react";
import { useNavigate } from 'react-router-dom'; 
import "./css/Servicios.css";

const Servicios = () => {
  const navigate = useNavigate();

  const handleBackhome = () => {
    navigate('/home'); // Redirige al home
  };

  return (
    <div>
      <h1>Servicios</h1>
      <button onClick={handleBackhome}>Volver al Home</button>
    </div>
  );
};

export default Servicios;
