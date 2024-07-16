// React
import React from "react";
import { Routes, Route } from "react-router-dom";
//Estilos CSS
import "./estilo/menuempresa.css";
import "./estilo/estilo.css";
//Paginas
import Inicio from "./paginas/inicio";
import Recuperar from "./paginas/recuperarsenha";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/senha" element={<Recuperar />} />
      </Routes>
    </div>
  );
}

export default App;
