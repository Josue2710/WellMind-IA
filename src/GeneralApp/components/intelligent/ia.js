import React, { useState } from "react";
import axios from "axios"; // Importar axios para realizar solicitudes HTTP
import "../../css/home.css";

const Ia = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const userId = "admin"; // Aquí puedes obtenerlo de tu autenticación

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;
  
    const newMessages = [...messages, { role: "user", content: inputText }];
    setMessages(newMessages);
    setInputText("");
  
    try {
      const response = await axios.post(
        "http://localhost:8000/chat", // Verifica esta URL
        { userId, text: inputText },
        {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`, // Si aplicas autenticación
            "Content-Type": "application/json",
          },
        }
      );
  
      const aiResponse = response.data?.response; // Evita error si response no existe
  
      if (!aiResponse) throw new Error("Respuesta vacía del backend");
  
      setMessages([...newMessages, { role: "bot", content: aiResponse }]);
    } catch (error) {
      console.error("Error en la comunicación con el backend:", error);
  
      // Verifica si el error viene de Axios
      if (error.response) {
        console.error("Detalles del error:", error.response.data);
      } else if (error.request) {
        console.error("El backend no respondió.");
      } else {
        console.error("Error al enviar la solicitud:", error.message);
      }
    }
  };
  

  return (
    <section className="chatbot">
      <div className="chat-container">
        {/* Panel lateral */}
        <aside className="sidebar">
          <button className="menu-btn">☰</button>
          <ul>
            <li>📂 Nuevos Chats</li>
            <li>🕒 Chats Recientes</li>
            <li>🔄 Reescribir texto...</li>
            <li>🔧 Corregir código...</li>
            <li>📜 Ejemplo de texto...</li>
          </ul>
          <div className="user-info">
            <p>👤 Bienvenido de nuevo </p>
          </div>
        </aside>

        {/* Área de chat */}
        <div className="chat-area">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>
              <p>{msg.content}</p>
            </div>
          ))}

          {/* Input para mensajes */}
          <div className="chat-input">
            <input
              type="text"
              placeholder="Escribe un mensaje aquí..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button onClick={handleSendMessage}>➤</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ia;


/*Clave API */
/*sk-proj-JbAvQ7ya6XmiUTfhWKubdM5j-KGJ9tECsoJkJ1sXu9nxIeH-Lg-
OSUNTHzb09vOl-l6QsjYWxqT3BlbkFJqFRKLhqek6vxsBQJ2cOsiuv2qxlRZw
5ycn9nSg70TFndKG7Emkw5iTbOXq6oT3fJgKGUlb5CAA */