import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para redirección
import microsoftLogo from "../assets/microsoft.png";
import googleLogo from "../assets/google.png";
import WellMind from "../assets/logo principal/wellmind logo.png";
import "../css/login.css";

const Login = () => {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Manejar envío del formulario
  const handleLogin = async () => {
    if (!username || !password) {
      alert("Por favor, ingresa usuario y contraseña.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      console.log("adsad")
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token); // Guardar token
        navigate("/home"); // Redirigir
      } else {
        alert(data.message || "Error en el inicio de sesión");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error de conexión con el servidor.");
    }
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
          <input
            type="text"
            placeholder="Usuario"
            className="inputUsuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="inputPass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="password">¿Olvidaste tu usuario / contraseña?</div>

          {/* Iconos de Microsoft y Google */}
          <div className="social-login">
            <img src={microsoftLogo} alt="Microsoft" className="icon" />
            <img src={googleLogo} alt="Google" className="icon" />
          </div>

          {/* Botones */}
          <button className="button1 primary" onClick={handleLogin}>Iniciar Sesión</button>
          <button className="button1 secondary" onClick={() => navigate("/registro")}>Registrarse</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
