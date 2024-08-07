// MenuCandidato.tsx
import React, { useState } from "react";
import { FaBell, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../estilo/menucandidato.css";

import Alerta from "./alerta";

const MenuCandidato: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  const toggleAlert = () => {
    setShowAlert(!showAlert);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="menu-container">
      <div className="menu-candidato">
        <div className="logo">
          <img src="LogoFinal4.png" alt="Logo" className="logofinal" />
        </div>

        <nav className="menu-options">
          <ul>
            <li>
              <Link to="/"> Trampos </Link>
            </li>
            <li>
              <a href="#">Carreiras</a>
            </li>
            <li>
              <a href="#">Quem Somos</a>
            </li>
            <li>
              <a href="#">Suporte</a>
            </li>
          </ul>
        </nav>

        <div className="icon bell-icon" onClick={toggleAlert}>
          <FaBell />
          {showAlert && <Alerta onClose={closeAlert} />}
        </div>

        <div className="icon user-icon">
          <Link to="/empresa">
            <FaUser />
          </Link>
        </div>
      </div>

      <div className="grad-bar"></div>
    </div>
  );
};

export default MenuCandidato;
