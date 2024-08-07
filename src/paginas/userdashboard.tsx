import React, { useState } from "react";
import "../estilo/userdashboard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faClipboardList,
  faCog,
  faSignOutAlt,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import UserProfile from "./userprofile";

const UserDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("perfil");

  const renderContent = () => {
    switch (activeSection) {
      case "perfil":
        return <UserProfile />;
      case "minhasVagas":
        return <h2>Minhas Vagas</h2>;
      case "entrevistas":
        return <h2>Entrevistas Agendadas</h2>;
      case "configuracoes":
        return <h2>Configurações</h2>;
      default:
        return <h2>Bem-vindo ao seu painel!</h2>;
    }
  };

  return (
    <div>
      <div className="user-dashboard">
        <aside className="sidebar-user">
          <div className="logo-container-user">
            <img
              src="/LogoFinal4.png"
              alt="Logo Trampos Facil"
              className="logo"
            />
          </div>
          <nav className="menu-user">
            <button onClick={() => setActiveSection("perfil")}>
              <FontAwesomeIcon icon={faUser} /> Meu Perfil
            </button>
            <button onClick={() => setActiveSection("minhasVagas")}>
              <FontAwesomeIcon icon={faClipboardList} /> Minhas Vagas
            </button>
            <button onClick={() => setActiveSection("entrevistas")}>
              <FontAwesomeIcon icon={faCalendarAlt} /> Entrevistas Agendadas
            </button>
            <button onClick={() => setActiveSection("configuracoes")}>
              <FontAwesomeIcon icon={faCog} /> Configurações
            </button>
            <Link to="/" className="logout-button-user">
              <FontAwesomeIcon icon={faSignOutAlt} /> Sair
            </Link>
          </nav>
        </aside>
        <main className="content">{renderContent()}</main>
      </div>
    </div>
  );
};

export default UserDashboard;
