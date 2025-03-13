import React from "react";
import { useNavigate } from "react-router-dom"; 
import mind from "./assets/logo principal/wellmind logo.png";
import "./css/home.css";
import ceoImage from "../GeneralApp/assets/ejemplo.jpg";

const handleReturn = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
};

const Home = () => {
    const navigate = useNavigate();

    const HandleMas = () => {
      navigate('/vermas');
    }

      const handleClick = () => {
        navigate('/home');
      };

      const handleUS = () => {
          navigate("/nosotros"); 
      };
      
      const handleIA = () => {
        navigate("/ia"); 
      };

      const handleServis = () => {
        navigate("/servicio");
      }

      const handleAR = () => {
        navigate ("/ar");
      }

      return (
        <div className="home-container">
          {/* Encabezado */}
          <header className="header">
        
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

          {/* primera seccion */}
          <section className="intro">
            <div className="intro-text">

              <div className="principal">
                <h1>La inteligencia que entiende tu mente, el apoyo que necesita tu vida.</h1>
              </div>


              {/*linea */}
              <div style={{
                borderBottom: '2px solid white',
                marginTop:"20px",
              }} />

              <div className="segundo"> 
                <p>
                  La inteligencia artificial ha tenido un auge en la actualidad, 
                  y queremos aprovechar esa base para crear algo innovador. 
                </p>
              </div>

             
              <button className="mas" onClick={HandleMas}>
                Ver mas
              </button>
               
              

            </div>
          </section>

          {/* seccion Sobre Nosotros */}
          <section className="about">
            <div className="logo-nosotros">
              <img src={mind} alt="Logo" className="nosotros" />
            </div>

            <div>
              <h2 className="about-sub">Sobre Nosostros</h2>
            </div>
           
            <h2 className="about-title">Transformando vidas a través de la tecnología</h2>
            
            <div className="about-content">
              <div className="about-text">
                <div className="ceo-message">
                  <div className="ceo-image">
                    <img src={ceoImage} alt="CEO" className="ceo-photo" />
                  </div>
                    <div className="ceo-text">
                      <h3>Bienvenida de nuestro CEO</h3>
                        <p>
                          El bienestar mental es fundamental en nuestra vida. En WellMind IA, utilizamos
                          inteligencia artificial para ayudarte a comprender y mejorar tu estado emocional.
                        </p>
                      <p className="mt-4 text-gray-600 font-semibold">Nombre del CEO</p>
                    <p className="text-xs text-gray-400">CEO, WellMind IA</p>
                  </div>
                </div>
              </div>

              <div className="about-mission">
                <div className="mission-container">
                  <h3 className="mission-title">Nuestra misión</h3>
                </div>
                
                <ul>
                  <li>
                    <div className="mission-item">
                      <img src={mind} alt="Logo" className="mission-logo" />
                        <span className="font-semibold"> 
                          Promoviendo el bienestar mental
                        </span>
                    </div>
                    
                    <p className="text-sm mt-1">
                      Buscamos ayudar a las personas a comprender y gestionar sus emociones con herramientas basadas en IA.
                    </p>
                  </li>
                  
                  <li>
                    <div className="mission-item">
                      <img src={mind} alt="Logo" className="mission-logo" />
                        <span className="font-semibold"> 
                          Empoderando a los individuos
                        </span>
                    </div>

                    <p className="text-sm mt-1">
                      Creemos en la importancia de tomar el control del
                      bienestar emocional con recursos accesibles y efectivos.
                    </p>
                  </li>

                  <li>
                    <div className="mission-item">
                      <img src={mind} alt="Logo" className="mission-logo" />
                        <span className="font-semibold"> 
                          Fomentando el crecimiento personal  
                        </span>
                    </div>
                    
                    <p className="text-sm mt-1"
                      >Nuestra plataforma ofrece recomendaciones y estrategias
                      para mejorar el bienestar de manera preventiva y sostenible.  
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* seccion Servicios */}
          <section className="services">
                <div className="logo-nosotros">
                  <img src={mind} alt="Logo" className="nosotros" />
                </div>

                <div>
                  <h2 className="about-sertitle">Nuestros Servicios</h2>
                </div>
          
                <h2 className="about-ser">
                  Bienestar Mental y Emocional Potenciado por IA
                </h2>
            
                <div className="services-grid">
                  <div className="service-card">
                    <div className="icon-container">
                      <svg
                      className="icon"
                      width="40"
                      height="40"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                      >

                      <circle cx="32" cy="32" r="30" fill="#1AA9B5" stroke="black" strokeWidth="2" />

                
                      <g transform="translate(20, 20) scale(1.2)">
                        <path
                          d="M10 0L11.6573 6.55861L17.8183 3.7651L13.7239 9.15005L19.7493 12.2252L12.9863 12.3815L14.3388 19.0097L10 13.8197L5.66116 19.0097L7.01367 12.3815L0.250721 12.2252L6.27611 9.15005L2.18168 3.7651L8.34271 6.55861L10 0Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </div>

                  <div className="text-title">Análisis Emocional con IA</div>
                    <div className="text-card">
                      <p>
                        Nuestra IA analiza tu estado emocional a través de texto o voz,
                        identificando señales de estrés, ansiedad o bienestar para brindarte
                        retroalimentación en tiempo real.
                      </p>
                    </div>
                  </div>

                  <div className="service-card">
                    <div className="icon-container">
                      <svg
                        className="icon"
                        width="40"
                        height="40"
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                        >

                        <circle cx="32" cy="32" r="30" fill="#1AA9B5" stroke="black" strokeWidth="2" />

                      
                        <g transform="translate(20, 20) scale(1.2)">
                          <path
                            d="M10 0L11.6573 6.55861L17.8183 3.7651L13.7239 9.15005L19.7493 12.2252L12.9863 12.3815L14.3388 19.0097L10 13.8197L5.66116 19.0097L7.01367 12.3815L0.250721 12.2252L6.27611 9.15005L2.18168 3.7651L8.34271 6.55861L10 0Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </div>

                    <div className="text-title">
                      Terapia Individua   
                    </div>
                    <div className="text-card">
                      <p>
                        Conéctate con terapeutas certificados o recibe orientación basada en IA con recomendaciones 
                        ajustadas a tu estado emocional y necesidades personales.
                      </p>
                    </div>
                  </div>

                    <div className="service-card">
                      <div className="icon-container">
                        <svg
                          className="icon"
                          width="40"
                          height="40"
                          viewBox="0 0 64 64"
                          xmlns="http://www.w3.org/2000/svg"
                        >

                        <circle cx="32" cy="32" r="30" fill="#1AA9B5" stroke="black" strokeWidth="2" />

                
                        <g transform="translate(20, 20) scale(1.2)">
                          <path
                            d="M10 0L11.6573 6.55861L17.8183 3.7651L13.7239 9.15005L19.7493 12.2252L12.9863 12.3815L14.3388 19.0097L10 13.8197L5.66116 19.0097L7.01367 12.3815L0.250721 12.2252L6.27611 9.15005L2.18168 3.7651L8.34271 6.55861L10 0Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </div>

                    <div className="text-title">  
                      Seguimiento de estado de ánimo
                    </div>

                    <div className="text-card">
                      <p>
                        Lleva un registro de tus emociones diarias, detecta patrones en tu bienestar
                        y recibe sugerencias para mejorar tu estado emocional.
                      </p>
                    </div>
                  </div>  

                  <div className="service-card">
                  <div className="icon-container">
                        <svg
                          className="icon"
                          width="40"
                          height="40"
                          viewBox="0 0 64 64"
                          xmlns="http://www.w3.org/2000/svg"
                        >

                        <circle cx="32" cy="32" r="30" fill="#1AA9B5" stroke="black" strokeWidth="2" />

                
                        <g transform="translate(20, 20) scale(1.2)">
                          <path
                            d="M10 0L11.6573 6.55861L17.8183 3.7651L13.7239 9.15005L19.7493 12.2252L12.9863 12.3815L14.3388 19.0097L10 13.8197L5.66116 19.0097L7.01367 12.3815L0.250721 12.2252L6.27611 9.15005L2.18168 3.7651L8.34271 6.55861L10 0Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </div>
                    
                      <div className="text-title">
                        Rutinas para el Bienestar
                      </div>


                      <div className="text-card">
                        <p>
                          Crea hábitos saludables con planes personalizados que incluyen 
                          ejercicios de relajación, mindfulness y actividades recomendadas por expertos.
                        </p>
                      </div>
                    </div>

                    <div className="service-card">
                      <div className="icon-container">
                          <svg
                            className="icon"
                            width="40"
                            height="40"
                            viewBox="0 0 64 64"
                            xmlns="http://www.w3.org/2000/svg"
                          >

                            <circle cx="32" cy="32" r="30" fill="#1AA9B5" stroke="black" strokeWidth="2" />

                  
                            <g transform="translate(20, 20) scale(1.2)">
                              <path
                                d="M10 0L11.6573 6.55861L17.8183 3.7651L13.7239 9.15005L19.7493 12.2252L12.9863 12.3815L14.3388 19.0097L10 13.8197L5.66116 19.0097L7.01367 12.3815L0.250721 12.2252L6.27611 9.15005L2.18168 3.7651L8.34271 6.55861L10 0Z"
                                fill="white"
                              />
                            </g>
                          </svg>
                        </div>


                        <div className="text-title">Recursos y Recomendaciones</div>
                      <div className="text-card">
                        <p>
                          Explora artículos, videos y herramientas basadas en IA que te 
                          ayudarán a comprender y mejorar tu salud mental de forma efectiva.
                        </p>
                      </div>
                    </div>

                    <div className="service-card">
                      <div className="icon-container">
                      <svg
                        className="icon"
                        width="40"
                        height="40"
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                        >

                        <circle cx="32" cy="32" r="30" fill="#1AA9B5" stroke="black" strokeWidth="2" />

                
                        <g transform="translate(20, 20) scale(1.2)">
                          <path
                            d="M10 0L11.6573 6.55861L17.8183 3.7651L13.7239 9.15005L19.7493 12.2252L12.9863 12.3815L14.3388 19.0097L10 13.8197L5.66116 19.0097L7.01367 12.3815L0.250721 12.2252L6.27611 9.15005L2.18168 3.7651L8.34271 6.55861L10 0Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </div>

                  <div className="text-title">
                    Ejercicios de Mindfulness y Relajación
                  </div>
                  <div className="text-card">
                    <p>
                      Accede a sesiones guiadas de meditación, respiración y
                      otras técnicas para reducir el estrés y la ansiedad.
                    </p>
                  </div>
                </div>
              </div>
            </section>

          {/* Sección Chatbot */}
          <section className="chatbot">
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
                  <button >➤</button>
                </div>
              </div>
            </div>
          </section>

          {/*Seccion Info */}
          <section className="info">
            <div className="Info-final">
              <div className="container">
                <div className="info-logo">
                  <img src={mind} alt="Logo" className="logo" />
                  <h1 className="info-text">WellMind IA</h1>
                </div>

                <div className="compa-info">
                  <nav className="compa-down">
                    <ul>
                      <p>Plataforma</p>
                      <li className="return-button" onClick={handleReturn}>Inicio</li>
                      <li>Sobre Nosotros</li>
                      <li>Servicios</li>
                      <li>IA</li>
                      <li>AR</li>
                      <li>Contactos</li>
                    </ul>
                  </nav>

                  <div className="servicio-info">
                    <nav className="servis-down">
                      <ul>
                        <p>Servicios</p>
                        <li>Análisis Emocional con IA</li>
                        <li>Terapia Individual</li>
                        <li>Seguimiento de estado de ánimo</li>
                        <li>Rutinas para el Bienestar</li>
                        <li>Recursos y Recomendaciones</li>
                        <li>Ejercicios de Mindfulness y Relajación</li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="footer">
                <div className="footer-derecha">
                  <p>Copyright © 2025 WellMind IA</p>
                  <p>Design by  JosueR</p>
                </div>


                <div style={{
                  borderLeft: '2px solid #22bba7',
                  height: '15px', 
                  marginTop: '-1px',
                  position: 'relative', 
                  right: '200px',  
                }} />

                <div className="footer-izquierda">
                  <p> Terms of Use  </p>
                  <p> Privacy Policy</p>
                </div>

               <div style={{
                  borderLeft: '2px solid  #22bba7',
                  height: '15px', 
                  marginTop: '-1px',
                  position: 'relative', 
                  right: '170px',  
                }} />
      </footer>
    </div>
  );
};

export default Home;
