// REACR
import React, { useState } from "react";
//CSS
import "../estilo/trampos.css"; // Verifique o caminho correto para o seu arquivo CSS
// ICONES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faBookmarkSolid } from "@fortawesome/free-solid-svg-icons";
//PAGINAS
import MenuCandidato from "../Componentes/menuCandidato";

interface Inicio {
  id: number;
  title: string;
  tags: {
    tipoContrato: string;
    remuneracao: string;
    cidade: string;
  };
  empresa: string;
  descricaoBreve: string;
  descricao: string;
  aplicar: string;
  sobreTrampo: string; // Informações detalhadas da vaga
  sobreEmpresa: string; // Informações detalhadas da empresa
}

const Inicio: React.FC = () => {
  const [trampos, setTrampos] = useState<Inicio[]>([
    {
      id: 1,
      title: "Desenvolvedor Front-end",
      tags: {
        tipoContrato: "CLT",
        remuneracao: "A combinar",
        cidade: "Bauru, SP",
      },
      empresa: "Empresa A",
      descricaoBreve:
        "Vaga para desenvolvedor front-end com experiência em React e CSS.",
      descricao:
        "Descrição detalhada da vaga de desenvolvedor front-end aqui...",
      aplicar: "https://www.exemplo.com/aplicar",
      sobreTrampo:
        "Informações detalhadas sobre a vaga de desenvolvedor front-end.",
      sobreEmpresa: "Informações sobre a Empresa A.",
    },
    {
      id: 2,
      title: "Designer UI/UX",
      tags: {
        tipoContrato: "PJ",
        remuneracao: "R$ 5.000,00",
        cidade: "São Paulo, SP",
      },
      empresa: "Empresa B",
      descricaoBreve:
        "Oportunidade para designer UI/UX com foco em experiência do usuário.",
      descricao: "Descrição detalhada da vaga de designer UI/UX aqui...",
      aplicar: "https://www.exemplo.com/aplicar",
      sobreTrampo: "Informações detalhadas sobre a vaga de designer UI/UX.",
      sobreEmpresa: "Informações sobre a Empresa B.",
    },
  ]);

  const [trampoSelecionado, setTrampoSelecionado] = useState<Inicio | null>(
    null
  );
  const [favoritado, setFavoritado] = useState<boolean>(false);
  const [mostrarDetalhesVaga, setMostrarDetalhesVaga] =
    useState<boolean>(false);
  const [mostrarDetalhesEmpresa, setMostrarDetalhesEmpresa] =
    useState<boolean>(false);

  const handleTrampoClick = (trampo: Inicio) => {
    setTrampoSelecionado(trampo);
    setFavoritado(trampo.id === trampoSelecionado?.id ? favoritado : false);
    setMostrarDetalhesVaga(false); // Garante que os detalhes da vaga não estejam visíveis ao selecionar um novo trampo
    setMostrarDetalhesEmpresa(false); // Garante que os detalhes da empresa não estejam visíveis ao selecionar um novo trampo
  };

  const handleClicarAplicar = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log("Aplicando à vaga:", trampoSelecionado?.aplicar);
    // Implemente a lógica para aplicar à vaga
  };

  const handleFavoriteClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setFavoritado(!favoritado);
    // Alterna o estado de favorito
  };

  const handleMostrarDetalhesEmpresa = () => {
    setMostrarDetalhesVaga(true);
    setMostrarDetalhesEmpresa(false); // Garante que apenas os detalhes da vaga estejam visíveis ao clicar em "Sobre a Vaga"
  };

  const handleMostrarDetalhesVaga = () => {
    setMostrarDetalhesEmpresa(true);
    setMostrarDetalhesVaga(false); // Garante que apenas os detalhes da empresa estejam visíveis ao clicar em "Sobre a Empresa"
  };

  const handleVoltarParaTrampos = () => {
    setTrampoSelecionado(null); // Limpa a seleção ao voltar para a lista de trampos
    setMostrarDetalhesVaga(false); // Limpa os detalhes da vaga ao voltar para a lista de trampos
    setMostrarDetalhesEmpresa(false); // Limpa os detalhes da empresa ao voltar para a lista de trampos
  };

  return (
    <div>
      <MenuCandidato />
      <div className="trampos-container">
        <div className="painel-esquerdo">
          <div className="lista-trampos">
            {trampos.map((trampo) => (
              <div
                key={trampo.id}
                className="item-trampo"
                onClick={() => handleTrampoClick(trampo)}
              >
                <h2>{trampo.title}</h2>
                <div className="tags">
                  <div className="tag-card">{trampo.tags.tipoContrato}</div>
                  <div className="tag-card">{trampo.tags.remuneracao}</div>
                  <div className="tag-card">{trampo.tags.cidade}</div>
                </div>
                <p>{trampo.empresa}</p>
                <p>{trampo.descricaoBreve}</p>
              </div>
            ))}
          </div>
        </div>
        {trampoSelecionado && (
          <div className="painel-direito">
            <div className="detalhes-trampo">
              <h1>{trampoSelecionado.title}</h1>
              <h5>{trampoSelecionado.empresa}</h5>
              <hr />
              <div className="tags">
                <div className="tag-card">{trampoSelecionado.tags.cidade}</div>
                <div className="tag-card">
                  {trampoSelecionado.tags.tipoContrato}
                </div>
                <div className="tag-card">
                  {trampoSelecionado.tags.remuneracao}
                </div>
              </div>
              <hr />
              <div className="aplicar-favorito">
                <div className="crie-conta">
                  <br />
                  <p>
                    Crie uma conta do Trampos Fácil antes de continuar a
                    candidatura
                  </p>
                </div>
                <div className="candidatar">
                  <button
                    className="botao-aplicar"
                    onClick={handleClicarAplicar}
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Candidatar-se
                  </button>
                  <button
                    className="botao-favorito"
                    onClick={handleFavoriteClick}
                  >
                    <FontAwesomeIcon
                      icon={favoritado ? faBookmarkSolid : faBookmarkRegular}
                      className={
                        favoritado ? "faBookmarkSolid" : "faBookmarkRegular"
                      }
                    />
                  </button>
                </div>
              </div>
              <hr />
              <br />
              <div className="mais-informacoes">
                <button
                  className="botao-mais-informacoes"
                  onClick={handleMostrarDetalhesEmpresa}
                >
                  <FontAwesomeIcon icon={faInfoCircle} /> Sobre a Vaga
                </button>
                <button
                  className="botao-mais-informacoes"
                  onClick={handleMostrarDetalhesVaga}
                >
                  <FontAwesomeIcon icon={faInfoCircle} /> Sobre a Empresa
                </button>
              </div>
              <br />
              <br />
              {mostrarDetalhesVaga && (
                <div className="detalhes-trampo">
                  <h2>Dados da Vaga</h2>
                  <hr />
                  <p>Tipo de vaga</p>
                  <p>{trampoSelecionado.tags.tipoContrato}</p>
                  <hr />
                  <h2>Localização</h2>
                  <p>{trampoSelecionado.tags.cidade}</p>
                  <hr />
                  <h2>Descrição completa da vaga</h2>
                  <p>{trampoSelecionado.sobreTrampo}</p>
                </div>
              )}
              {mostrarDetalhesEmpresa && (
                <div className="detalhes-trampo">
                  <h2>Dados da Empresa</h2>
                  <hr />
                  <h2>Nome</h2>
                  <p>{trampoSelecionado.empresa}</p>
                  <hr />
                  <h2>Descrição da Empresa</h2>
                  <p>{trampoSelecionado.sobreEmpresa}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inicio;
