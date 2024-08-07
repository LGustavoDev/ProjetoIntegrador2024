import React, { useState } from "react";
import "../estilo/companydashboard.css";
import CadastrarVagas from "./CadastrarVagas";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faClipboardList,
  faUsers,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import MenuEmpresa from "../Componentes/menuEmpresa";
import PerfilEmpresa from "./PerfilEmpresa";
import VisualizarVagas from "./VisualizarVagas";

const CompanyDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("cadastrar");
  const [submenuVisible, setSubmenuVisible] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setSubmenuVisible(submenuVisible === menu ? null : menu);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "cadastrar":
        return <CadastrarVagas />;
      case "verVagas":
        return <VisualizarVagas />;
      case "perfil":
        return <PerfilEmpresa />;
      case "cadastrarRH":
        return <h2>Cadastrar Membros do RH</h2>;
      case "verCandidatos":
        return <h2>Ver Candidatos</h2>;
      case "agendarEntrevistas":
        return <h2>Agendar Entrevistas</h2>;
      case "configuracoes":
        return <h2>Configurações</h2>;
      default:
        return <h2>Bem-vindo ao painel da empresa!</h2>;
    }
  };

  return (
    <div>
      <MenuEmpresa />
      <div className="company-dashboard">
        <aside className="sidebar">
          <div className="logo-container">
            <img
              src="/LogoFinal4.png"
              alt="Logo Trampos Facil"
              className="logo"
            />
          </div>
          <nav className="menu">
            <div className="menu-group">
              <button onClick={() => toggleSubmenu("perfil")}>
                <FontAwesomeIcon icon={faUser} /> Perfil
              </button>
              {submenuVisible === "perfil" && (
                <div className="submenu">
                  <button onClick={() => setActiveSection("perfil")}>
                    Perfil da Empresa
                  </button>
                  <button onClick={() => setActiveSection("cadastrarRH")}>
                    Cadastrar Membros do RH
                  </button>
                </div>
              )}
            </div>
            <div className="menu-group">
              <button onClick={() => toggleSubmenu("vagas")}>
                <FontAwesomeIcon icon={faClipboardList} /> Vagas
              </button>
              {submenuVisible === "vagas" && (
                <div className="submenu">
                  <button onClick={() => setActiveSection("cadastrar")}>
                    Cadastrar Vagas
                  </button>
                  <button onClick={() => setActiveSection("verVagas")}>
                    Ver Vagas Cadastradas
                  </button>
                </div>
              )}
            </div>
            <div className="menu-group">
              <button onClick={() => toggleSubmenu("candidatos")}>
                <FontAwesomeIcon icon={faUsers} /> Candidatos
              </button>
              {submenuVisible === "candidatos" && (
                <div className="submenu">
                  <button onClick={() => setActiveSection("verCandidatos")}>
                    Ver Candidatos
                  </button>
                  <button
                    onClick={() => setActiveSection("agendarEntrevistas")}
                  >
                    Agendar Entrevistas
                  </button>
                </div>
              )}
            </div>

            <button onClick={() => setActiveSection("configuracoes")}>
              <FontAwesomeIcon icon={faCog} /> Configurações
            </button>
            <Link to="/" className="logout-button">
              <FontAwesomeIcon icon={faSignOutAlt} /> Sair
            </Link>
          </nav>
        </aside>
        <main className="content">{renderContent()}</main>
      </div>
    </div>
  );
};

export default CompanyDashboard;
