// React
import React from "react";
import { Routes, Route } from "react-router-dom";
//Estilos CSS

//Paginas
import Inicio from "./paginas/inicio";
import Recuperar from "./paginas/recuperarsenha";
import Vagas from "./paginas/vagas";
import Login from "./paginas/login";
import SupportPage from "./paginas/faq";
import CompanyDashboard from "./paginas/companydashboard";
import { VagasProvider } from "./contexts/VagasContext";
import UserDashboard from "./paginas/userdashboard";

function App() {
  return (
    <div className="App">
      <VagasProvider>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/senha" element={<Recuperar />} />
          <Route path="/vaga" element={<Vagas />} />
          <Route path="/login" element={<Login />} />
          <Route path="/suport" element={<SupportPage />} />
          <Route path="/empresa" element={<CompanyDashboard />} />
          <Route path="/usuario" element={<UserDashboard />} />
        </Routes>
      </VagasProvider>
    </div>
  );
}

export default App;
