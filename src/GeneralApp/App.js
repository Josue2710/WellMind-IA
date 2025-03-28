import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/*Area del loguearte */
import Login from "./login/login.js";
import Registro from "./registrar/registro.js";

/*Principal */
import Home from "./home.js";

/*Componentes o complementos */
import Nosotros from "./components/nosotros/Nosotros.js";
import IA from "./components/intelligent/ia.js";
import Servicios from "./components/Servicio/servicios.js";
import AR from "./components/realidad/AR.js"; 
import Vermas from "./components/mas/vermas.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/registro" element={<Registro />} /> {/* Area de Registro */} 


        {/*Complementos App */}
        <Route path="/home" element={<Home />} />  {/*Inicio*/} 
        <Route path="/nosotros" element={<Nosotros/>} />  {/*  Sobre la App */} 
        <Route path="/ia" element={<IA/>} />    {/* Conversa con nuestra inteligencia artificial*/} 
        <Route path= "/servicio" element={<Servicios/>} />   {/* Cuales servicios brindamos al pais */} 
        <Route path= "/ar" element={<AR/>} />   {/*Apartado de realidad aumentada */} 
        <Route path= "/vermas" element={<Vermas/>} /> {/* Ver mas*/}
      </Routes>
    </Router>
  );
};

export default App;
