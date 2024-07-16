import MenuCandidato from "../Componentes/menuCandidato"
import "../estilo/vagas.css"
/*Icone*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons"
import { faBookmark as faBookmarkSolid } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"



function Vagas() {
    const [favorito, setFavorito] = useState<boolean>(false)
    const handleFavorito = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { e.preventDefault(); setFavorito(!favorito);}
    return (
        <div>
            <MenuCandidato />

            <div className="vagas-container">
                <div className="vagas-detalhes">
                    <h1>Nome da Vaga</h1>
                    <h3>Nome da Empresa</h3>

                    <div className="tags">
                        <div className="tags-card">Cidade/Estado</div>
                        <div className="tags-card">Modalidade</div>
                    </div>

                    <div className="tags">
                        <div className="tags-card">Salario</div>
                    </div>

                    <div className="vagas-candidatar">
                        <button className="btm-candidatar"><FontAwesomeIcon icon={faExternalLinkAlt} className="btn-candidatar-icon"/>Candidatar-se</button>
                        <button className="btm-favorito" onClick={handleFavorito}><FontAwesomeIcon icon={favorito ? faBookmarkSolid : faBookmarkRegular} className={favorito ? "faBookmarkSoled" : "faBookmarkRegular"}/>
                        </button>
                    </div>

                </div>

                <hr />
                <br />

                <div className="vagas-informacao">
                    <h2>Dados da Vaga</h2>
                    <hr />
                    <p>Tipo de vaga</p>
                    <p>Tag da vaga</p>
                    <hr />
                    <h2>Localização</h2>
                    <p>Tag Cidade</p>
                    <hr />
                    <h2>Beneficios</h2>
                    <ul>
                        <li>Descrição do Beneficio</li>
                    </ul>
                    <h2>Descrição completa da vaga</h2>
                    <p>Sobre a vaga</p>
                </div>

                <div className="empresa-informacao">
                    <h2>Dados da Empresa</h2>
                    <hr />
                    <h2>Nome da Empresa</h2>
                    <p>Empresa</p>
                    <hr />
                    <h2>Descrição da Empresa</h2>
                    <p>Sobre a Empresa</p>
                </div>

            </div>
        </div>

    )
}

export default Vagas