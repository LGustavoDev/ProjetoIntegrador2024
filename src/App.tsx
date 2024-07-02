import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './estilo/estilo.css'; // Importe o CSS corretamente, se necessário
import Trampos from './paginas/trampos';
import Recuperar from './paginas/recuperarsenha';


function App() {
  return (
       <div className="App">
        < Routes>
          <Route path="/" element={<Trampos/>} />
          <Route path="/senha" element={<Recuperar/>} />        
        </ Routes>
      </div>
    
  );
}

export default App;
