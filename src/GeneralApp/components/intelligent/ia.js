import React from "react";
import { useNavigate } from 'react-router-dom'; 
import "./css/ia.css";

const AR = () => {
  const navigate = useNavigate();

  const handleBackhome = () => {
    navigate('/home'); // Redirige al home
  };

  return (
    <div>

      <section className="chatbot">

      <button onClick={handleBackhome}>Volver al Home</button>
        <div className="chat-container">
       
          {/* Panel lateral */}
          <aside className="sidebar">
            <button className="menu-btn">☰</button>
            <ul>
              <li>📂 Nuevos Chats</li>
              <li>🕒 Chats Recientes</li>
              <li>🔄 Reescribir texto...</li>
              <li>🔧 Corregir este código...</li>
              <li>📜 Ejemplo de texto...</li>
            </ul>
            <div className="user-info">
              <p>👤 Bienvenido de nuevo </p>
            </div>
          </aside>

          {/* Área de chat */}
          <div className="chat-area">
            <div className="message user">
              <p>Reescribe: ‘Este es un chatbot de IA generado para mejorar la comunicación y simplificar los flujos de trabajo’</p>
            </div>

            <div className="message bot">
              <p>Este chatbot de IA ha sido desarrollado para optimizar la comunicación y simplificar los procesos de trabajo, lo que lleva a operaciones más fluidas.</p>
            </div>

            <div className="message user">
              <p>¡Gracias! 🙂</p>
            </div>

            {/* Input para mensajes */}
            <div className="chat-input">
              <input type="text" placeholder="Escribe un mensaje aquí..." />
              <button>➤</button>
            </div>
          </div>
        </div>
      </section>
      <div>
        <h1>Inteligencia artificial</h1>
        <button onClick={handleBackhome}>Volver al Home</button>
      </div>
    </div>
  );
};

export default AR;


/*Clave API */
/*sk-proj-JbAvQ7ya6XmiUTfhWKubdM5j-KGJ9tECsoJkJ1sXu9nxIeH-Lg-
OSUNTHzb09vOl-l6QsjYWxqT3BlbkFJqFRKLhqek6vxsBQJ2cOsiuv2qxlRZw
5ycn9nSg70TFndKG7Emkw5iTbOXq6oT3fJgKGUlb5CAA */