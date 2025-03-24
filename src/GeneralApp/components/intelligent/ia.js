import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../css/home.css";
import mind from "../img/wellmind logo.png";
import "./css/ia.css";


const AR = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [recentChats, setRecentChats] = useState([]);

  // Función para obtener los chats recientes
  const fetchRecentChats = async () => {
    try {
      setMessages([]); // Limpiar pantalla antes de mostrar chats recientes
      const urlServer = process.env.REACT_APP_URL_SERVER;
      const response = await axios.get(urlServer + "/chat/recent", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (response.data.chats) {
        setRecentChats(response.data.chats);
      }
    } catch (error) {
      console.error("Error al obtener chats recientes:", error);
    }
  };

  // Función para cargar un chat seleccionado
  const loadChat = (chat) => {
    setMessages(chat.messages);
  };

  // Función para manejar el envío de mensajes
  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const newMessages = [...messages, { role: "user", content: inputText }];
    setMessages(newMessages);
    setInputText("");

    try {
      const urlServer = process.env.REACT_APP_URL_SERVER;

      const response = await axios.post(
        urlServer + "/chat",
        { text: inputText },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      const aiResponse = response.data?.response;

      if (!aiResponse) throw new Error("Respuesta vacía del backend");

      setMessages([...newMessages, { role: "bot", content: aiResponse }]);
    } catch (error) {
      console.error("Error en la comunicación con el backend:", error);
    }
  };


  // Función para iniciar un nuevo chat
  const handleNewChat = () => {
    setMessages([]);
    setRecentChats([]); // También limpia la lista de chats recientes
  };

  const handleClick = () => {
    navigate("/home");
  };

  const handleUS = () => {
    navigate("/nosotros");
  };

  const handleIA = () => {
    navigate("/ia");
  };

  const handleServis = () => {
    navigate("/servicio");
  };

  const handleAR = () => {
    navigate("/ar");
  };


  return (

    <>
    {/* Encabezado */}
    <header className="header" style={{ width: '1330px' }}>
        <div className="logo-container">
          <img src={mind} alt="Logo" className="logo" />
          <h1 className="logo-text">WellMind IA</h1>
        </div>

        <nav>
          <ul>
            <li onClick={handleClick}>Inicio</li>
            <li onClick={handleUS}>Sobre Nosotros</li>
            <li onClick={handleServis}>Servicios</li>
            <li onClick={handleIA}>IA</li>
            <li onClick={handleAR}>AR</li>
          </ul>
        </nav>
      </header>
    

      <section className="chatbot">

      

<div className="chat-container chatbot-page">
  {/* Panel lateral */}
  <aside className="sidebar">
    <button className="menu-btn">☰</button>
    <ul>
      <li onClick={handleNewChat}>📂 Nuevo Chat</li>
      <li onClick={fetchRecentChats}>🕒 Chats Recientes</li>
    </ul>


    {/* Mostrar chats recientes */}
    {recentChats.length > 0 && (
      <div className="recent-chats">
        <h3 className="title-chats-recientes">Chats Recientes</h3>
        <ul>
          {recentChats.map((chat, index) => (
            <li key={index} onClick={() => loadChat(chat)}>
              📜 Chat {index + 1}
            </li>
          ))}
        </ul>
      </div>
    )}

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
        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
      />
      <button onClick={handleSendMessage}>➤</button>
    </div>
  </div>
</div>
</section>
    
    </>
    
  );
};

export default AR;
