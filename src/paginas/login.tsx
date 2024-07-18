import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "../estilo/login.css";

function Login() {
  return (
    <div className="corpo-login">
      <div className="container-login">
        <div className="menu-login">
          <Link to="/" className="voltar">
            {" "}
            <FontAwesomeIcon icon={faCircleArrowLeft} />
            Voltar{" "}
          </Link>

          <div className="logo">
            <img src="Logo-Vetor-01.png" alt="logo" />
          </div>

          <div className="conteudo-login">
            <div className="icone-usuario">
              <FaUser />
            </div>
            <p>
              Entre com o <span>E-mail</span>
            </p>
          </div>

          <div className="input-login">
            <label>
              <input type="email" placeholder="Digite seu e-mail" />
            </label>

            <label>
              <input type="password" placeholder="Digite sua senha" />
            </label>

            <button className="botao-entrar" type="submit">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
