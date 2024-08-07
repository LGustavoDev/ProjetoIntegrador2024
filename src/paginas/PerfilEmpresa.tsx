import React, { useState } from "react";
import "../estilo/perfilEmpresa.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faGlobe,
  faEdit,
  faSave,
  faBullseye,
  faEye,
  faIndustry,
  faUsers,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

interface CompanyInfo {
  nome: string;
  sobre: string;
  email: string;
  telefone: string;
  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
  website: string;
  setor: string;
  tamanho: string;
  anoFundacao: string;
  foto: string;
  missao: string;
  visao: string;
  valores: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
}

const PerfilEmpresa: React.FC = () => {
  const [editMode, setEditMode] = useState(false);
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({
    nome: "Nome da Empresa",
    sobre: "Sobre a Empresa",
    email: "email@empresa.com",
    telefone: "(11) 1234-5678",
    endereco: "Rua Exemplo, 123",
    cidade: "São Paulo",
    estado: "SP",
    cep: "01234-567",
    website: "https://www.empresa.com",
    setor: "Tecnologia",
    tamanho: "500+ Funcionários",
    anoFundacao: "2000",
    foto: "https://via.placeholder.com/150?text=Logo+Empresa",
    missao: "Missão da empresa",
    visao: "Visão da empresa",
    valores: "Valores da empresa",
    facebook: "https://www.facebook.com/empresa",
    twitter: "https://twitter.com/empresa",
    linkedin: "https://www.linkedin.com/company/empresa",
    instagram: "https://www.instagram.com/empresa",
  });
  const [fotoPreview, setFotoPreview] = useState(companyInfo.foto);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setCompanyInfo({ ...companyInfo, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFotoPreview(reader.result as string);
        setCompanyInfo({ ...companyInfo, foto: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEditMode(false);
    // Salvar as alterações na base de dados aqui
  };

  return (
    <div className="perfil-empresa">
      <div className="perfil-header">
        <img src={fotoPreview} alt="Foto da Empresa" className="perfil-foto" />
        <div className="perfil-header-content">
          <h1>{companyInfo.nome}</h1>
          <button className="edit-button" onClick={handleEditClick}>
            <FontAwesomeIcon icon={editMode ? faSave : faEdit} />
          </button>
        </div>
      </div>
      <br />
      <br />
      {editMode ? (
        <form className="perfil-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="foto">Foto da Empresa</label>
            <input
              type="file"
              id="foto"
              name="foto"
              accept="image/*"
              onChange={handleFileChange}
            />
            {fotoPreview && (
              <img
                src={fotoPreview}
                alt="Foto da Empresa"
                className="foto-preview"
              />
            )}
          </div>
          <div className="form-group">
            <label htmlFor="sobre">Sobre</label>
            <textarea
              id="sobre"
              name="sobre"
              value={companyInfo.sobre}
              onChange={handleChange}
            ></textarea>
          </div>
          {Object.keys(companyInfo).map(
            (key) =>
              key !== "foto" &&
              key !== "sobre" && (
                <div className="form-group" key={key}>
                  <label htmlFor={key}>
                    {key.charAt(0).toUpperCase() +
                      key.slice(1).replace(/([A-Z])/g, " $1")}
                  </label>
                  {key === "tamanho" ? (
                    <select
                      id={key}
                      name={key}
                      value={companyInfo[key as keyof CompanyInfo]}
                      onChange={
                        handleChange as React.ChangeEventHandler<HTMLSelectElement>
                      }
                    >
                      <option value="1-10 Funcionários">
                        1-10 Funcionários
                      </option>
                      <option value="11-50 Funcionários">
                        11-50 Funcionários
                      </option>
                      <option value="51-200 Funcionários">
                        51-200 Funcionários
                      </option>
                      <option value="201-500 Funcionários">
                        201-500 Funcionários
                      </option>
                      <option value="500+ Funcionários">
                        500+ Funcionários
                      </option>
                    </select>
                  ) : (
                    <input
                      type={key === "email" ? "email" : "text"}
                      id={key}
                      name={key}
                      value={companyInfo[key as keyof CompanyInfo]}
                      onChange={handleChange}
                    />
                  )}
                </div>
              )
          )}
          <div className="form-actions">
            <button type="submit">Salvar</button>
            <button type="button" onClick={handleEditClick}>
              Cancelar
            </button>
          </div>
        </form>
      ) : (
        <div className="perfil-info">
          <div className="perfil-sobre card">
            <h2>Sobre</h2>
            <p>{companyInfo.sobre}</p>
          </div>
          <div className="cards-container">
            <div className="card perfil-missao">
              <h2>
                <FontAwesomeIcon icon={faBullseye} /> Missão
              </h2>
              <p>{companyInfo.missao}</p>
            </div>
            <div className="card perfil-visao">
              <h2>
                <FontAwesomeIcon icon={faEye} /> Visão
              </h2>
              <p>{companyInfo.visao}</p>
            </div>
            <div className="card perfil-valores">
              <h2>
                <FontAwesomeIcon icon={faIndustry} /> Valores
              </h2>
              <p>{companyInfo.valores}</p>
            </div>
          </div>
          <div className="cards-container">
            <div className="card perfil-setor">
              <h2>
                <FontAwesomeIcon icon={faIndustry} /> Setor
              </h2>
              <p>{companyInfo.setor}</p>
            </div>
            <div className="card perfil-tamanho">
              <h2>
                <FontAwesomeIcon icon={faUsers} /> Tamanho
              </h2>
              <p>{companyInfo.tamanho}</p>
            </div>
            <div className="card perfil-ano-fundacao">
              <h2>
                <FontAwesomeIcon icon={faCalendar} /> Ano de Fundação
              </h2>
              <p>{companyInfo.anoFundacao}</p>
            </div>
          </div>
          <div className="perfil-contato-redes card">
            <h2>Informações de Contato</h2>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> {companyInfo.email}
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> {companyInfo.telefone}
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {companyInfo.endereco},{" "}
              {companyInfo.cidade} - {companyInfo.estado}, {companyInfo.cep}
            </p>
            <p>
              <FontAwesomeIcon icon={faGlobe} />{" "}
              <a
                href={companyInfo.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {companyInfo.website}
              </a>
            </p>
            <div className="social-icons">
              <a
                href={companyInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href={companyInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href={companyInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href={companyInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerfilEmpresa;
