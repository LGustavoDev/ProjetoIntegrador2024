import React from "react";
import "../estilo/menuempresa.css";
import { FaBell, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

function MenuEmpresa() {
  return (
    <div className="empresa-conteiner">
      <div className="empresa-menu">
        <nav className="menu-principal">
          <ul>
            <li>
              <a href="#"> Nossos Produtos</a>
            </li>
            <li>
              <a href="#"> Suporte</a>
            </li>
          </ul>
        </nav>

        <div className="icone icone-empresa">
          <Link to="/empresa">
            <FaUsers />
          </Link>
        </div>
      </div>

      <div className="grad-bar"></div>
    </div>
  );
}

export default MenuEmpresa;
