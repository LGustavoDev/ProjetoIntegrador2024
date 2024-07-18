// React
import React from "react";
import { Routes, Route } from "react-router-dom";
//Estilos CSS

//Paginas
import Inicio from "./paginas/inicio";
import Recuperar from "./paginas/recuperarsenha";
import Vagas from "./paginas/vagas";
import Login from "./paginas/login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/senha" element={<Recuperar />} />
        <Route path="/vaga" element={<Vagas/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
