import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para redirección
import microsoftLogo from "../assets/microsoft.png";
import googleLogo from "../assets/google.png";
import WellMind from "../assets/logo principal/wellmind logo.png";
import "../css/login.css";

const Login = () => {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("12345");

  // Manejar envío del formulario
  const handleLogin = async () => {
    if (!username || !password) {
      alert("Por favor, ingresa usuario y contraseña.");
      return;
    }

    // Simulación de respuesta del servidor
    try {
      // Simulamos un retraso en la respuesta como si fuera una llamada real al servidor
      const simulatedResponse = new Promise((resolve) => {
        setTimeout(() => {
          if (username === "admin" && password === "12345") {
            resolve({ ok: true, data: { token: "simulated-token" } });
          } else {
            resolve({ ok: false, message: "Credenciales incorrectas" });
          }
        }, 1000); // Simulamos un retraso de 1 segundo
      });

      const response = await simulatedResponse;

      // Aquí verificamos si la respuesta es exitosa
      if (response.ok) {
        localStorage.setItem("token", response.data.token); // Guardar token simulado
        navigate("/home"); // Redirigir a la página de inicio
      } else {
        alert(response.message || "Error en el inicio de sesión");
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
