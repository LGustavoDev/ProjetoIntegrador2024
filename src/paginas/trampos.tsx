import React, { useState } from 'react';
import '../estilo/trampos.css'; // Verifique o caminho correto para o seu arquivo CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import MenuCandidato from '../Componentes/menuCandidato';

interface Trampo {
  id: number;
  title: string;
  tags: {
    tipoContrato: string;
    remuneracao: string;
    cidade: string;
  };
  company: string;
  descricaoBreve: string;
  description: string;
  applyLink: string;
  aboutJob: string; // Informações detalhadas da vaga
  aboutCompany: string; // Informações detalhadas da empresa
}

const Trampos: React.FC = () => {
  const [trampos, setTrampos] = useState<Trampo[]>([
    {
      id: 1,
      title: "Desenvolvedor Front-end",
      tags: {
        tipoContrato: "CLT",
        remuneracao: "A combinar",
        cidade: "Bauru, SP"
      },
      company: "Empresa A",
      descricaoBreve: "Vaga para desenvolvedor front-end com experiência em React e CSS.",
      description: "Descrição detalhada da vaga de desenvolvedor front-end aqui...",
      applyLink: "https://www.exemplo.com/aplicar",
      aboutJob: "Informações detalhadas sobre a vaga de desenvolvedor front-end.",
      aboutCompany: "Informações sobre a Empresa A."
    },
    {
      id: 2,
      title: "Designer UI/UX",
      tags: {
        tipoContrato: "PJ",
        remuneracao: "R$ 5.000,00",
        cidade: "São Paulo, SP"
      },
      company: "Empresa B",
      descricaoBreve: "Oportunidade para designer UI/UX com foco em experiência do usuário.",
      description: "Descrição detalhada da vaga de designer UI/UX aqui...",
      applyLink: "https://www.exemplo.com/aplicar",
      aboutJob: "Informações detalhadas sobre a vaga de designer UI/UX.",
      aboutCompany: "Informações sobre a Empresa B."
    }
  ]);

  const [trampoSelecionado, setTrampoSelecionado] = useState<Trampo | null>(null);
  const [favoritado, setFavoritado] = useState<boolean>(false);
  const [mostrarDetalhesVaga, setMostrarDetalhesVaga] = useState<boolean>(false);
  const [mostrarDetalhesEmpresa, setMostrarDetalhesEmpresa] = useState<boolean>(false);

  const handleTrampoClick = (trampo: Trampo) => {
    setTrampoSelecionado(trampo);
    setFavoritado(trampo.id === trampoSelecionado?.id ? favoritado : false);
    setMostrarDetalhesVaga(false); // Garante que os detalhes da vaga não estejam visíveis ao selecionar um novo trampo
    setMostrarDetalhesEmpresa(false); // Garante que os detalhes da empresa não estejam visíveis ao selecionar um novo trampo
  };

  const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log("Aplicando à vaga:", trampoSelecionado?.applyLink);
    // Implemente a lógica para aplicar à vaga
  };

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setFavoritado(!favoritado);
    // Alterna o estado de favorito
  };

  const handleShowJobDetails = () => {
    setMostrarDetalhesVaga(true);
    setMostrarDetalhesEmpresa(false); // Garante que apenas os detalhes da vaga estejam visíveis ao clicar em "Sobre a Vaga"
  };

  const handleShowCompanyDetails = () => {
    setMostrarDetalhesEmpresa(true);
    setMostrarDetalhesVaga(false); // Garante que apenas os detalhes da empresa estejam visíveis ao clicar em "Sobre a Empresa"
  };

  const handleBackToTrampos = () => {
    setTrampoSelecionado(null); // Limpa a seleção ao voltar para a lista de trampos
    setMostrarDetalhesVaga(false); // Limpa os detalhes da vaga ao voltar para a lista de trampos
    setMostrarDetalhesEmpresa(false); // Limpa os detalhes da empresa ao voltar para a lista de trampos
  };

  return (
   <div>
    <MenuCandidato/>
    <div className="trampos-container">
      <div className="left-pane">
        <div className="lista-trampos">
          {trampos.map(trampo => (
            <div key={trampo.id} className="item-trampo" onClick={() => handleTrampoClick(trampo)}>
              <h2>{trampo.title}</h2>
              <div className="tags">
                <div className="tag-card">{trampo.tags.tipoContrato}</div>
                <div className="tag-card">{trampo.tags.remuneracao}</div>
                <div className="tag-card">{trampo.tags.cidade}</div>
              </div>
              <p>{trampo.company}</p>
              <p>{trampo.descricaoBreve}</p>
            </div>
          ))}
        </div>
      </div>
      {trampoSelecionado && (
        <div className="right-pane">
          <div className="detalhes-trampo">
            <h1>{trampoSelecionado.title}</h1>
            <h5>{trampoSelecionado.company}</h5>
            <hr />
            <div className="tags">
              <div className="tag-card">{trampoSelecionado.tags.cidade}</div>
              <div className="tag-card">{trampoSelecionado.tags.tipoContrato}</div>
              <div className="tag-card">{trampoSelecionado.tags.remuneracao}</div>
            </div>
            <hr />
            <div className="apply-favorite">
              <div className='crie-conta'>
                <br />
                <p>Crie uma conta do Trampos Fácil antes de continuar a candidatura</p>
              </div>
              <div className='candidatar'>
                <button className="apply-button" onClick={handleApplyClick}>
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> Candidatar-se
                </button>
                <button className="favorite-button" onClick={handleFavoriteClick}>
                  <FontAwesomeIcon icon={favoritado ? faBookmarkSolid : faBookmarkRegular} className={favoritado ? "faBookmarkSolid" : "faBookmarkRegular"} />
                </button>
              </div>
            </div>
            <hr />
            <br />
            <div className="more-info-buttons">
              <button className="more-info-button" onClick={handleShowJobDetails}>
                <FontAwesomeIcon icon={faInfoCircle} /> Sobre a Vaga
              </button>
              <button className="more-info-button" onClick={handleShowCompanyDetails}>
                <FontAwesomeIcon icon={faInfoCircle} /> Sobre a Empresa
              </button>
            </div>
            <br />
            <br />
            {mostrarDetalhesVaga && (
              <div className="job-details">
                <h2>Dados da Vaga</h2>
                <hr />
                <p>Tipo de vaga</p>
                <p>{trampoSelecionado.tags.tipoContrato}</p>
                <hr />
                <h2>Localização</h2>
                <p>{trampoSelecionado.tags.cidade}</p>
                <hr />
                <h2>Descrição completa da vaga</h2>
                <p>{trampoSelecionado.aboutJob}</p>
              </div>
            )}
            {mostrarDetalhesEmpresa && (
              <div className="job-details">
                <h2>Dados da Empresa</h2>
                <hr />
                <h2>Nome</h2>
                <p>{trampoSelecionado.company}</p>
                <hr />
                <h2>Descrição da Empresa</h2>
                <p>{trampoSelecionado.aboutCompany}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default Trampos;
