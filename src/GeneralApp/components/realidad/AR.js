import React from "react";
import { useNavigate } from 'react-router-dom'; 
import "./css/AR.css";

const AR = () => {
  const navigate = useNavigate();

  const handleBackhome = () => {
    navigate('/home'); // Redirige al home
  };

  return (
    <div>
      <h1>Realidad Aumentada</h1>
      <button onClick={handleBackhome}>Volver al Home</button>
    </div>
  );
};

export default AR;
