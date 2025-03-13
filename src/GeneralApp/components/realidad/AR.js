import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import "./css/AR.css";

const AR = () => {
  const navigate = useNavigate();
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'es-ES';

      recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const currentTranscript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += currentTranscript + " ";
          } else {
            interimTranscript += currentTranscript;
          }
        }
        
        const fullTranscript = finalTranscript + interimTranscript;
        setTranscript(fullTranscript);
        analyzeText(fullTranscript);
      };

      recognition.onerror = (event) => {
        console.error("Error en el reconocimiento de voz: ", event.error);
        setErrorMessage("Error al procesar la voz. Intenta nuevamente.");
        setIsListening(false);
      };

      recognition.onend = () => {
        if (isListening) {
          recognition.start();
        }
      };

      recognitionRef.current = recognition;
    } else {
      console.error("Speech Recognition no es soportado en este navegador.");
      setErrorMessage("Este navegador no es compatible con el reconocimiento de voz.");
    }
  }, [isListening]);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        setStream(stream);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error("Error al acceder a la cámara: ", error);
        setErrorMessage("No se pudo acceder a la cámara.");
      });
  }, []);

  const analyzeText = (text) => {
    if (!text) return;
    
    const positiveWords = ["feliz", "contento", "alegre", "excelente", "genial", "bien"];
    const negativeWords = ["triste", "mal", "deprimido", "estresado", "ansioso", "cansado"];
    
    let positiveCount = 0;
    let negativeCount = 0;
    
    text.split(" ").forEach(word => {
      if (positiveWords.includes(word.toLowerCase())) {
        positiveCount++;
      } else if (negativeWords.includes(word.toLowerCase())) {
        negativeCount++;
      }
    });
    
    if (positiveCount > negativeCount) {
      setAnalysis("Tu estado emocional parece positivo. ¡Sigue así!");
    } else if (negativeCount > positiveCount) {
      setAnalysis("Parece que podrías estar sintiéndote mal. Si necesitas ayuda, habla con alguien de confianza.");
    } else {
      setAnalysis("No se detecta una emoción clara en tu discurso.");
    }
  };

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      recognitionRef.current.start();
      setIsListening(true);
      setErrorMessage("");
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const handleBackhome = () => {
    navigate('/home');
  };

  return (
    <div>
      <h1>Realidad Aumentada</h1>
      <button onClick={handleBackhome}>Volver al Home</button>
      
      <div>
        <button onClick={startListening} disabled={isListening}>
          Iniciar Reconocimiento
        </button>
        <button onClick={stopListening} disabled={!isListening}>
          Detener Reconocimiento
        </button>
      </div>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <div>
        <h2>Transcripción:</h2>
        <p>{transcript}</p>
      </div>

      <div>
        <h2>Análisis del estado emocional:</h2>
        <p>{analysis}</p>
      </div>
      
      <div>
        <h2>Vista de la Cámara:</h2>
        <video ref={videoRef} autoPlay playsInline style={{ width: "100%", maxHeight: "400px" }}></video>
      </div>
    </div>
  );
};

export default AR;
