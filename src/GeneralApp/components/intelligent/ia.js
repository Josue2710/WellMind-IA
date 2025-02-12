import React from "react";
import { useNavigate } from 'react-router-dom'; 
import "./css/ia.css";

const Ia = () => {
  const navigate = useNavigate();

  const handleBackhome = () => {
    navigate('/home'); // Redirige al home
  };

  return (
    <div>
      <h1>IA</h1>
      <button onClick={handleBackhome}>Volver al Home</button>
    </div>
  );
};

export default Ia;
