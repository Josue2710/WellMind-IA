import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import WellMindIA from "../assets/logo principal/wellmind logo.png"; 
import "../css/registro.css"; 

const Registro = () => {
  const navigate = useNavigate(); // Inicializa useNavigate y asigna a la variable `navigate`
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Función para redirigir al login
  const handleLoginRedirect = async () => {

    if(!username || !password){
      alert("Por favor, ingresa usuario y contraseña.");
      return;
    }

    if(password !== confirmPassword){
      alert("Confirmacion de contraseña incorrecta");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      console.log(data)

      if (response.ok) {
        alert(data.message);
        navigate("/"); // Redirigir
      } else {
        alert(data.message || "Error al crear usuario");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error de conexión con el servidor.");
    }


  };

  return (
    <div className="registro">
      <div className="container-registro">
        <div className="logo-container">
          <img src={WellMindIA} alt="Logo" className="logo-registro" />
        </div>

        <div className="card-register">
          <div className="form-container">
            <h1>Registro</h1>

            {/* Inputs */}
            <input type="text" placeholder="Usuario" className="usuregistro"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="passregistro"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
            <input
              type="password"
              required
              placeholder="Repetir Contraseña"
              className="resspassregistro"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}

            />

            {/* Botón */}
            <button className="button third" onClick={handleLoginRedirect}>Registrarse</button>

            {/* Texto para redirigir al login */}
            <div
              className="forgot-password"
              onClick={()=>{navigate("/");}} // Asocia la función al evento onClick
            >
              Ya tienes un usuario? Iniciar Sesión
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;