import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './estilo/estilo.css'; // Importe o CSS corretamente, se necessário
import Trampos from './paginas/trampos';
import Recuperar from './paginas/recuperarsenha';
import CadastroEmpresa from './paginas/cadastroEmpresa';


function App() {
  return (
       <div className="App">
        < Routes>
          <Route path="/" element={<Trampos/>} />
          <Route path="/senha" element={<Recuperar/>} /> 
          <Route path='/cadastro' element={<CadastroEmpresa/>}  />     
        </ Routes>
      </div>
    
  );
}

export default App;
