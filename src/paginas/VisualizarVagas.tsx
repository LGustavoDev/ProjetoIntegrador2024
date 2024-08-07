// VerVagas.tsx
import React, { useContext, useState } from "react";
import { VagasContext } from "../contexts/VagasContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEdit,
  faSave,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "../estilo/visualizarVagas.css";

interface Vaga {
  id: number;
  titulo: string;
  descricao: string;
  beneficios: string[];
  ocultarSalario: boolean;
  salario: string;
  horarioDeTrabalho: string;
  ocultarNomeEmpresa: boolean;
  cidade: string;
  estado: string;
  modalidadeContratacao: string;
  modeloTrabalho: string;
}

const VerVagas: React.FC = () => {
  const { vagas, editarVaga, removerVaga } = useContext(VagasContext);
  const [detalheVaga, setDetalheVaga] = useState<number | null>(null);
  const [editMode, setEditMode] = useState<number | null>(null);
  const [vagaEditada, setVagaEditada] = useState<Vaga>({
    id: 0,
    titulo: "",
    descricao: "",
    beneficios: [""],
    ocultarSalario: false,
    salario: "",
    horarioDeTrabalho: "",
    ocultarNomeEmpresa: false,
    cidade: "",
    estado: "",
    modalidadeContratacao: "",
    modeloTrabalho: "",
  });

  const handleViewDetails = (id: number) => {
    setDetalheVaga(detalheVaga === id ? null : id);
  };

  const handleEditClick = (vaga: Vaga) => {
    setEditMode(vaga.id);
    setVagaEditada(vaga);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setVagaEditada((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const handleSaveClick = () => {
    editarVaga(vagaEditada);
    setEditMode(null);
    setDetalheVaga(null);
  };

  const handleCancelEdit = () => {
    setEditMode(null);
    setDetalheVaga(null);
  };

  const handleRemoverVaga = (id: number) => {
    removerVaga(id);
    setDetalheVaga(null);
  };

  const handleAddBenefit = () => {
    setVagaEditada((prevState) => ({
      ...prevState,
      beneficios: [...prevState.beneficios, ""],
    }));
  };

  const handleRemoveBenefit = (index: number) => {
    setVagaEditada((prevState) => ({
      ...prevState,
      beneficios: prevState.beneficios.filter((_, i) => i !== index),
    }));
  };

  const contratacaoOptions = [
    "CLT",
    "Estágio",
    "Jovem Aprendiz",
    "Freelancer",
    "Trabalho Temporário",
    "Trabalho Intermitente",
    "Terceirização",
    "Pessoa Jurídica (PJ)",
    "Trainee",
  ];

  const trabalhoOptions = ["Presencial", "Híbrido", "Home-Office"];

  return (
    <div className="ver-vagas">
      <h2>Vagas Cadastradas</h2>
      <div className="vagas-list">
        {vagas.map((vaga) => (
          <div
            key={vaga.id}
            className={`vaga-item ${detalheVaga === vaga.id ? "expanded" : ""}`}
          >
            <div className="vaga-summary">
              <h3>{vaga.titulo}</h3>
              <p>
                {vaga.descricao.length > 100
                  ? vaga.descricao.substring(0, 100) + "..."
                  : vaga.descricao}
              </p>
              <button
                className="view-details-button"
                onClick={() => handleViewDetails(vaga.id)}
              >
                <FontAwesomeIcon icon={faEye} />{" "}
                {detalheVaga === vaga.id ? "Ocultar Detalhes" : "Ver Detalhes"}
              </button>
            </div>

            {detalheVaga === vaga.id && (
              <div className="vaga-details">
                {editMode === vaga.id ? (
                  <div className="vaga-edit-form">
                    <button className="cancel-edit" onClick={handleCancelEdit}>
                      <FontAwesomeIcon icon={faTimes} /> Cancelar
                    </button>
                    <label>
                      Título da Vaga:
                      <input
                        type="text"
                        name="titulo"
                        value={vagaEditada.titulo}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Descrição:
                      <textarea
                        name="descricao"
                        value={vagaEditada.descricao}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Benefícios:
                      {vagaEditada.beneficios.map((benefit, index) => (
                        <div key={index} className="benefit-input">
                          <input
                            type="text"
                            name="beneficios"
                            value={benefit}
                            onChange={(e) =>
                              setVagaEditada((prevState) => {
                                const beneficios = [...prevState.beneficios];
                                beneficios[index] = e.target.value;
                                return { ...prevState, beneficios };
                              })
                            }
                          />
                          <button
                            className="remove-button"
                            onClick={() => handleRemoveBenefit(index)}
                          >
                            <FontAwesomeIcon icon={faTimes} />
                          </button>
                        </div>
                      ))}
                      <button
                        className="add-benefit-button"
                        onClick={handleAddBenefit}
                      >
                        Adicionar Benefício
                      </button>
                    </label>
                    <label>
                      Salário:
                      <input
                        type="text"
                        name="salario"
                        value={vagaEditada.salario}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Ocultar Salário:
                      <input
                        type="checkbox"
                        name="ocultarSalario"
                        checked={vagaEditada.ocultarSalario}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Horário de Trabalho:
                      <input
                        type="text"
                        name="horarioDeTrabalho"
                        value={vagaEditada.horarioDeTrabalho}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Cidade:
                      <input
                        type="text"
                        name="cidade"
                        value={vagaEditada.cidade}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Estado:
                      <input
                        type="text"
                        name="estado"
                        value={vagaEditada.estado}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Modalidade de Contratação:
                      <select
                        name="modalidadeContratacao"
                        value={vagaEditada.modalidadeContratacao}
                        onChange={handleChange}
                      >
                        {contratacaoOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label>
                      Modelo de Trabalho:
                      <select
                        name="modeloTrabalho"
                        value={vagaEditada.modeloTrabalho}
                        onChange={handleChange}
                      >
                        {trabalhoOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </label>
                    <button className="save-button" onClick={handleSaveClick}>
                      <FontAwesomeIcon icon={faSave} /> Salvar
                    </button>
                  </div>
                ) : (
                  <div className="vaga-detail-item">
                    <strong>Descrição:</strong>
                    <p>{vaga.descricao}</p>
                    <strong>Benefícios:</strong>
                    <ul>
                      {vaga.beneficios.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                    <strong>Salário:</strong>
                    <p>{vaga.ocultarSalario ? "Oculto" : vaga.salario}</p>
                    <strong>Horário de Trabalho:</strong>
                    <p>{vaga.horarioDeTrabalho}</p>
                    <strong>Cidade:</strong>
                    <p>{vaga.cidade}</p>
                    <strong>Estado:</strong>
                    <p>{vaga.estado}</p>
                    <strong>Modalidade de Contratação:</strong>
                    <p>{vaga.modalidadeContratacao}</p>
                    <strong>Modelo de Trabalho:</strong>
                    <p>{vaga.modeloTrabalho}</p>
                    <div className="vaga-action-buttons">
                      <button
                        className="edit-button"
                        onClick={() => handleEditClick(vaga)}
                      >
                        <FontAwesomeIcon icon={faEdit} /> Editar
                      </button>
                      <button
                        className="remove-button"
                        onClick={() => handleRemoverVaga(vaga.id)}
                      >
                        <FontAwesomeIcon icon={faTimes} /> Remover
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerVagas;
