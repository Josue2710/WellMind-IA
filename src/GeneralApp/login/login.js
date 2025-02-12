import React from "react";
import { useNavigate } from "react-router-dom"; // Importa para la redirección
import microsoftLogo from "../assets/microsoft.png"; // Logo de Microsoft
import googleLogo from "../assets/google.png"; // Logo de Google
import WellMind from "../assets/logo principal/wellmind logo.png"; 
import "../css/login.css";

const Login = () => {
  const navigate = useNavigate(); 

  const handleLogin = () => {
    navigate("/home"); 
  };

  const HandleRegistro = () => {
    navigate("/registro");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Logo alineado a la izquierda */}
        <div className="logo-container">
          <img src={WellMind} alt="Logo" className="logo" />
        </div>

        {/* Formulario de login */}
        <div className="form-container">
          <input type="text" placeholder="Usuario" className="inputUsuario" />
          <input type="password" placeholder="Contraseña" className="inputPass" />

          <div className="password">¿Olvidaste tu usuario / contraseña?</div>

          {/* Iconos de Microsoft y Google */}
          <div className="social-login">
            <img src={microsoftLogo} alt="Microsoft" className="icon" />
            <img src={googleLogo} alt="Google" className="icon" />
          </div>

          {/* Botones */}
          <button className="button1 primary" onClick={handleLogin}>Iniciar Sesión</button>
          <button className="button1 secondary" onClick={HandleRegistro}>Registrarse</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
