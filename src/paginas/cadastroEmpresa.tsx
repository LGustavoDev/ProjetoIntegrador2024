import React from "react";
import { Link } from "react-router-dom";
import '../estilo/estilos1.css'


function Cadastro() {
    return (
        <div className="Conteiner-Cadastro">
            <div className="Tela-cadastro">
                <div>
                    <Link to="/" className="Botao-Voltar">
                        <img className="Voltar" src="/img/Voltar.png" alt="Voltar" />
                    </Link>
                </div>
                <div className="imagem">
                    <img className="Logo-cadastro" src="/img/Logo.png" alt="Logo" />
                </div>
                <h1 className="Titulo-Cadastro">
                    Faça seu Login No Trampos <span className="Palavra-Destaque">Fácil</span> <br />
                    E Venha Fazer parte da Nossa Equipe
                </h1>
                <div className="Centro-Cadastro">
                    <Link to="/candidato" className="Botao-Cadastro">
                        <img className="Perfil-Solo" src="/img/Perfil-solo.png" alt="Perfil Solo" />
                        <h1 className="Candidato">Cadastre-se como Candidato</h1>
                    </Link>
                    <Link to="/empresa" className="Botao-Cadastro">
                        <img className="Perfil-Grupo" src="/img/Perfil-Grupo.png" alt="Perfil Grupo" />
                        <h1 className="Empresas">Cadastre-se como Empresa</h1>
                    </Link>
                </div>
                <div className="Titulo-Final">
                    <h1>
                        Você é novo no Trampos <span className="Palavra-Destaque">Fácil</span>
                    </h1>
                    <h2 className="classe-mudavel">
                        Cadastre-se como <Link to="/candidato">Candidato</Link> ou <Link to="/empresa">Empresa</Link>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;