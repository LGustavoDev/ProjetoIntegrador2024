import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './estilo/estilo.css'; // Importe o CSS corretamente, se necessário
import Trampos from './paginas/trampos';
import Recuperar from './paginas/recuperarsenha';
import CadastroEmpresa from './paginas/cadastroEmpresa';
<<<<<<< HEAD
import Empresas from './paginas/empresas';
import './estilo/menuempresa.css'
=======
import Suporte from './paginas/suporte';
>>>>>>> aca9b280c717c42b7f87677879a9138a93179101


function App() {
  return (
       <div className="App">
        < Routes>
          <Route path="/" element={<Trampos/>} />
          <Route path="/senha" element={<Recuperar/>} /> 
<<<<<<< HEAD
          <Route path='/cadastro' element={<CadastroEmpresa/>}  /> 
          <Route path='/empresas' element={<Empresas/>} />    
=======
          <Route path='/cadastro' element={<CadastroEmpresa/>}  />     
          <Route path='/suporte' element={<Suporte/>} />
>>>>>>> aca9b280c717c42b7f87677879a9138a93179101
        </ Routes>
      </div>
    
  );
}

export default App;
