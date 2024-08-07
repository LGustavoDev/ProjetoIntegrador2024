import React, { useState } from "react";
import "../estilo/userProfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faEdit,
  faSave,
  faFilePdf,
  faBriefcase,
  faGraduationCap,
  faCertificate,
  faBookOpen,
  faProjectDiagram,
  faLightbulb,
  faGears,
} from "@fortawesome/free-solid-svg-icons";

// Interfaces para o usuário e projetos
interface Projeto {
  nome: string;
  descricao: string;
  link: string;
}

interface UltimoEmprego {
  cargo: string;
  empresa: string;
  duracao: string;
  descricao: string;
}

interface Educacao {
  instituicao: string;
  grau: string;
  dataConclusao: string;
}

interface Usuario {
  nome: string;
  bio: string;
  email: string;
  telefone: string;
  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
  foto: string;
  ultimoEmprego: UltimoEmprego;
  educacao: Educacao[];
  habilidades: string[];
  certificacoes: string[];
  cursos: string[];
  projetos: Projeto[];
  areasInteresse: string[];
  curriculo: File | null;
}

const PerfilUsuario: React.FC = () => {
  const [editMode, setEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState<Usuario>({
    nome: "João Silva",
    bio: "Desenvolvedor Frontend apaixonado por criar interfaces intuitivas.",
    email: "joao.silva@email.com",
    telefone: "(11) 1234-5678",
    endereco: "Rua Exemplo, 123",
    cidade: "São Paulo",
    estado: "SP",
    cep: "01234-567",
    foto: "https://via.placeholder.com/150?text=Foto+de+Perfil",
    ultimoEmprego: {
      cargo: "Desenvolvedor Frontend",
      empresa: "Tech Solutions",
      duracao: "Jan 2020 - Presente",
      descricao: "Desenvolvimento de aplicações web e mobile com React.",
    },
    educacao: [
      {
        instituicao: "Universidade de São Paulo",
        grau: "Bacharel em Ciência da Computação",
        dataConclusao: "2020",
      },
    ],
    habilidades: ["JavaScript", "React", "CSS", "TypeScript"],
    certificacoes: ["Certificação React", "Certificação Frontend"],
    cursos: ["Curso de React Avançado", "Curso de UX/UI"],
    projetos: [
      {
        nome: "Projeto A",
        descricao: "Um projeto incrível de desenvolvimento web.",
        link: "https://example.com/projeto-a",
      },
    ],
    areasInteresse: ["Desenvolvimento Web", "Design de Interfaces"],
    curriculo: null,
  });

  const [fotoPreview, setFotoPreview] = useState(userInfo.foto);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setUserInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleNestedChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    section: keyof Omit<
      Usuario,
      | "educacao"
      | "habilidades"
      | "certificacoes"
      | "cursos"
      | "projetos"
      | "areasInteresse"
      | "curriculo"
    >
  ) => {
    const { name, value } = e.target;

    setUserInfo((prevInfo) => {
      const updatedSection = {
        ...(prevInfo[section] as object),
        [name]: value,
      };
      return { ...prevInfo, [section]: updatedSection as any };
    });
  };

  const handleArrayChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    section: keyof Pick<
      Usuario,
      "habilidades" | "certificacoes" | "cursos" | "projetos" | "areasInteresse"
    >
  ) => {
    const { value } = e.target;

    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [section]: value.split(",").map((item) => item.trim()),
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setFotoPreview(reader.result as string);
        setUserInfo((prevInfo) => ({ ...prevInfo, curriculo: file }));
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
    // Implementar a lógica para salvar as alterações
  };

  return (
    <div className="perfil-usuario">
      <div className="perfil-header">
        <img src={fotoPreview} alt="Foto de Perfil" className="foto-perfil" />
        <div className="perfil-header-content">
          <h2>{userInfo.nome}</h2>
          <p>{userInfo.bio}</p>
        </div>
        <button onClick={handleEditClick} className="edit-button">
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </div>

      {editMode ? (
        <form onSubmit={handleSubmit} className="perfil-form">
          <label>
            Nome Completo:
            <input
              type="text"
              name="nome"
              value={userInfo.nome}
              onChange={handleChange}
            />
          </label>
          <label>
            Bio:
            <textarea name="bio" value={userInfo.bio} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Telefone:
            <input
              type="text"
              name="telefone"
              value={userInfo.telefone}
              onChange={handleChange}
            />
          </label>
          <label>
            Endereço:
            <input
              type="text"
              name="endereco"
              value={userInfo.endereco}
              onChange={handleChange}
            />
          </label>
          <label>
            Cidade:
            <input
              type="text"
              name="cidade"
              value={userInfo.cidade}
              onChange={handleChange}
            />
          </label>
          <label>
            Estado:
            <input
              type="text"
              name="estado"
              value={userInfo.estado}
              onChange={handleChange}
            />
          </label>
          <label>
            CEP:
            <input
              type="text"
              name="cep"
              value={userInfo.cep}
              onChange={handleChange}
            />
          </label>
          <label>
            Foto de Perfil:
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files) {
                  const file = e.target.files[0];
                  const reader = new FileReader();

                  reader.onloadend = () => {
                    setFotoPreview(reader.result as string);
                    setUserInfo((prevInfo) => ({
                      ...prevInfo,
                      foto: reader.result as string,
                    }));
                  };

                  reader.readAsDataURL(file);
                }
              }}
            />
          </label>

          <section className="perfil-section">
            <h3>
              <FontAwesomeIcon icon={faBriefcase} /> Último Emprego
            </h3>
            <label>
              Cargo:
              <input
                type="text"
                name="cargo"
                value={userInfo.ultimoEmprego.cargo}
                onChange={(e) => handleNestedChange(e, "ultimoEmprego")}
              />
            </label>
            <label>
              Empresa:
              <input
                type="text"
                name="empresa"
                value={userInfo.ultimoEmprego.empresa}
                onChange={(e) => handleNestedChange(e, "ultimoEmprego")}
              />
            </label>
            <label>
              Duração:
              <input
                type="text"
                name="duracao"
                value={userInfo.ultimoEmprego.duracao}
                onChange={(e) => handleNestedChange(e, "ultimoEmprego")}
              />
            </label>
            <label>
              Descrição:
              <textarea
                name="descricao"
                value={userInfo.ultimoEmprego.descricao}
                onChange={(e) => handleNestedChange(e, "ultimoEmprego")}
              />
            </label>
          </section>

          <section className="perfil-section">
            <h3>
              <FontAwesomeIcon icon={faGraduationCap} /> Educação
            </h3>
            {userInfo.educacao.map((edu, index) => (
              <div key={index}>
                <label>
                  Instituição:
                  <input
                    type="text"
                    name="instituicao"
                    value={edu.instituicao}
                    onChange={(e) =>
                      setUserInfo((prevInfo) => {
                        const updatedEducacao = [...prevInfo.educacao];
                        updatedEducacao[index].instituicao = e.target.value;
                        return { ...prevInfo, educacao: updatedEducacao };
                      })
                    }
                  />
                </label>
                <label>
                  Grau:
                  <input
                    type="text"
                    name="grau"
                    value={edu.grau}
                    onChange={(e) =>
                      setUserInfo((prevInfo) => {
                        const updatedEducacao = [...prevInfo.educacao];
                        updatedEducacao[index].grau = e.target.value;
                        return { ...prevInfo, educacao: updatedEducacao };
                      })
                    }
                  />
                </label>
                <label>
                  Data de Conclusão:
                  <input
                    type="text"
                    name="dataConclusao"
                    value={edu.dataConclusao}
                    onChange={(e) =>
                      setUserInfo((prevInfo) => {
                        const updatedEducacao = [...prevInfo.educacao];
                        updatedEducacao[index].dataConclusao = e.target.value;
                        return { ...prevInfo, educacao: updatedEducacao };
                      })
                    }
                  />
                </label>
              </div>
            ))}
          </section>

          <section className="perfil-section">
            <h3>
              <FontAwesomeIcon icon={faGears} /> Habilidades
            </h3>
            <textarea
              value={userInfo.habilidades.join(", ")}
              onChange={(e) => handleArrayChange(e, "habilidades")}
            />
          </section>

          <section className="perfil-section">
            <h3>
              <FontAwesomeIcon icon={faCertificate} /> Certificações
            </h3>
            <textarea
              value={userInfo.certificacoes.join(", ")}
              onChange={(e) => handleArrayChange(e, "certificacoes")}
            />
          </section>

          <section className="perfil-section">
            <h3>
              <FontAwesomeIcon icon={faBookOpen} /> Cursos
            </h3>
            <textarea
              value={userInfo.cursos.join(", ")}
              onChange={(e) => handleArrayChange(e, "cursos")}
            />
          </section>

          <section className="perfil-section">
            <h3>
              <FontAwesomeIcon icon={faProjectDiagram} /> Projetos
            </h3>
            {userInfo.projetos.map((proj, index) => (
              <div key={index}>
                <label>
                  Nome:
                  <input
                    type="text"
                    name="nome"
                    value={proj.nome}
                    onChange={(e) => {
                      const updatedProjetos = [...userInfo.projetos];
                      updatedProjetos[index].nome = e.target.value;
                      setUserInfo((prevInfo) => ({
                        ...prevInfo,
                        projetos: updatedProjetos,
                      }));
                    }}
                  />
                </label>
                <label>
                  Descrição:
                  <textarea
                    name="descricao"
                    value={proj.descricao}
                    onChange={(e) => {
                      const updatedProjetos = [...userInfo.projetos];
                      updatedProjetos[index].descricao = e.target.value;
                      setUserInfo((prevInfo) => ({
                        ...prevInfo,
                        projetos: updatedProjetos,
                      }));
                    }}
                  />
                </label>
                <label>
                  Link:
                  <input
                    type="text"
                    name="link"
                    value={proj.link}
                    onChange={(e) => {
                      const updatedProjetos = [...userInfo.projetos];
                      updatedProjetos[index].link = e.target.value;
                      setUserInfo((prevInfo) => ({
                        ...prevInfo,
                        projetos: updatedProjetos,
                      }));
                    }}
                  />
                </label>
              </div>
            ))}
          </section>

          <section className="perfil-section">
            <h3>
              <FontAwesomeIcon icon={faLightbulb} /> Áreas de Interesse
            </h3>
            <textarea
              value={userInfo.areasInteresse.join(", ")}
              onChange={(e) => handleArrayChange(e, "areasInteresse")}
            />
          </section>

          <section className="perfil-section">
            <h3>
              <FontAwesomeIcon icon={faFilePdf} /> Currículo
            </h3>
            <input type="file" accept=".pdf" onChange={handleFileChange} />
            {userInfo.curriculo && <p>Currículo Atualizado</p>}
          </section>

          <button type="submit" className="save-button">
            <FontAwesomeIcon icon={faSave} /> Salvar
          </button>
        </form>
      ) : (
        <div className="perfil-info">
          <p>
            Email: <FontAwesomeIcon icon={faEnvelope} /> {userInfo.email}
          </p>
          <p>
            Telefone: <FontAwesomeIcon icon={faPhone} /> {userInfo.telefone}
          </p>
          <p>
            Endereço: <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
            {userInfo.endereco}, {userInfo.cidade} - {userInfo.estado},{" "}
            {userInfo.cep}
          </p>
          <section className="perfil-section">
            <h3>
              <FontAwesomeIcon icon={faBriefcase} /> Último Emprego
            </h3>
            <p>
              {userInfo.ultimoEmprego.cargo} na {userInfo.ultimoEmprego.empresa}{" "}
              ({userInfo.ultimoEmprego.duracao})
            </p>
            <p>{userInfo.ultimoEmprego.descricao}</p>
          </section>
          <section className="perfil-section">
            <h3>
              <FontAwesomeIcon icon={faGraduationCap} /> Educação
            </h3>
            {userInfo.educacao.map((edu, index) => (
              <div key={index}>
                <p>
                  {edu.instituicao} - {edu.grau} ({edu.dataConclusao})
                </p>
              </div>
            ))}
          </section>
          <section className="perfil-section">
            <h3>
              <FontAwesomeIcon icon={faGears} /> Habilidades
            </h3>
            <p>{userInfo.habilidades.join(", ")}</p>
          </section>
          <section className="perfil-section">
            <h3>
              <FontAwesomeIcon icon={faCertificate} /> Certificações
            </h3>
            <p>{userInfo.certificacoes.join(", ")}</p>
          </section>
          <section className="perfil-section">
            <h3>
              <FontAwesomeIcon icon={faBookOpen} /> Cursos
            </h3>
            <p>{userInfo.cursos.join(", ")}</p>
          </section>
          <section className="perfil-section">
            <h3>
              <FontAwesomeIcon icon={faProjectDiagram} /> Projetos
            </h3>
            {userInfo.projetos.map((proj, index) => (
              <div key={index}>
                <p>
                  {proj.nome}: {proj.descricao}{" "}
                  <a href={proj.link} target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                </p>
              </div>
            ))}
          </section>
          <section className="perfil-section">
            <h3>
              <FontAwesomeIcon icon={faLightbulb} /> Áreas de Interesse
            </h3>
            <p>{userInfo.areasInteresse.join(", ")}</p>
          </section>
          <section className="perfil-section">
            <h3>
              <FontAwesomeIcon icon={faFilePdf} /> Currículo
            </h3>
            {userInfo.curriculo && <p>Currículo Disponível</p>}
          </section>
        </div>
      )}
    </div>
  );
};

export default PerfilUsuario;
