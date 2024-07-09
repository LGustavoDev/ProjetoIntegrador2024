import React from "react";
import '../estilo/menuempresa.css'
import { FaBell, FaUsers } from "react-icons/fa";

function MenuEmpresa() {
    return (
        <div className="empresa-conteiner">
            <div className="empresa-menu">

                <div className="logo">
                    <img src='Logo-Vetor-01.png' alt="Logo" />
                </div>

                <nav className="menu-principal">
                    <ul>
                        <li><a href="#"> Nossos Produtos</a></li>
                        <li><a href="#"> Suporte</a></li>
                    </ul>
                </nav>

                <div className="icone-sino">
                    <FaBell/>
                </div>
                <div className="icone-empresa">
                    <FaUsers/> <span>Nome da Empresa</span>
                </div>

            </div>

            <div className="grad-bar"></div>

            <div className="sub-menu">
                <nav className="menu-segundario">
                    <ul>
                        <li><a href="#"> Cadastrar Vagas</a></li>
                        <li><a href="#"> Histórico de Vagas</a></li>
                        <li><a href="#"> Candidatos</a></li>
                        <li><a href="#"> Entrevistas</a></li>
                    </ul>
                </nav>
            </div>
          

        </div>
    )
}

export default MenuEmpresa
