import React, { useState, useContext } from "react";
import "../estilo/cadastrarvagas.css";
import { VagasContext } from "../contexts/VagasContext";

const CadastrarVagas: React.FC = () => {
  const { adicionarVaga } = useContext(VagasContext);

  const [titulo, setTitulo] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [benefits, setBenefits] = useState<string[]>([""]);
  const [hideSalary, setHideSalary] = useState<boolean>(false);
  const [salary, setSalary] = useState<string>("");
  const [workHours, setWorkHours] = useState<string>("");
  const [hideCompanyName, setHideCompanyName] = useState<boolean>(false);
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [modalidadeContratacao, setModalidadeContratacao] =
    useState<string>("");
  const [modeloTrabalho, setModeloTrabalho] = useState<string>("");

  const handleBenefitChange = (index: number, value: string) => {
    const newBenefits = [...benefits];
    newBenefits[index] = value;
    setBenefits(newBenefits);
  };

  const handleAddBenefit = () => {
    setBenefits([...benefits, ""]);
  };

  const handleRemoveBenefit = (index: number) => {
    setBenefits(benefits.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const novaVaga = {
      id: Date.now(),
      titulo,
      descricao,
      beneficios: benefits,
      ocultarSalario: hideSalary,
      salario: salary,
      horarioDeTrabalho: workHours,
      ocultarNomeEmpresa: hideCompanyName,
      cidade: city,
      estado: state,
      modalidadeContratacao,
      modeloTrabalho,
    };
    adicionarVaga(novaVaga);
    // Resetando os campos
    setTitulo("");
    setDescricao("");
    setBenefits([""]);
    setHideSalary(false);
    setSalary("");
    setWorkHours("");
    setHideCompanyName(false);
    setCity("");
    setState("");
    setModalidadeContratacao("");
    setModeloTrabalho("");
  };

  const stateOptions = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];

  return (
    <div className="cadastrar-vagas">
      <h2>Cadastrar Vaga</h2>
      <form className="job-form" onSubmit={handleSubmit}>
        <label>
          Nome da Vaga:
          <input
            type="text"
            placeholder="Nome da Vaga"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </label>
        <div className="location-container">
          <label>
            Cidade:
            <input
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </label>
          <label>
            Estado:
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            >
              <option value="">Selecione o Estado</option>
              {stateOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="salary-container">
          <label>
            Salário:
            <input
              type="text"
              placeholder="Digite o salário"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              disabled={hideSalary}
            />
          </label>
          <div className="salary-buttons">
            <button
              type="button"
              className="standard-button"
              onClick={() => setHideSalary(!hideSalary)}
            >
              {hideSalary ? "Mostrar Salário" : "Ocultar Salário"}
            </button>
          </div>
        </div>
        <div className="select-container">
          <label>
            Modalidade de Contratação:
            <select
              value={modalidadeContratacao}
              onChange={(e) => setModalidadeContratacao(e.target.value)}
              required
            >
              <option value="">Selecione a Modalidade</option>
              <option>CLT</option>
              <option>Estágio</option>
              <option>Jovem Aprendiz</option>
              <option>Freelancer</option>
              <option>Trabalho Temporário</option>
              <option>Trabalho Intermitente</option>
              <option>Terceirização</option>
              <option>Pessoa Jurídica (PJ)</option>
              <option>Trainee</option>
            </select>
          </label>
          <label>
            Modelo de Trabalho:
            <select
              value={modeloTrabalho}
              onChange={(e) => setModeloTrabalho(e.target.value)}
              required
            >
              <option value="">Selecione o Modelo</option>
              <option>Presencial</option>
              <option>Híbrido</option>
              <option>Home-Office</option>
            </select>
          </label>
        </div>
        <label>
          Horário de Trabalho:
          <input
            type="text"
            placeholder="Horário de Trabalho"
            value={workHours}
            onChange={(e) => setWorkHours(e.target.value)}
          />
        </label>
        <label>
          Benefícios:
          <div className="benefits-list">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-input">
                <input
                  type="text"
                  placeholder="Benefício"
                  value={benefit}
                  onChange={(e) => handleBenefitChange(index, e.target.value)}
                />
                <button
                  type="button"
                  className="remove-benefit-button standard-button"
                  onClick={() => handleRemoveBenefit(index)}
                >
                  Remover
                </button>
              </div>
            ))}
            <button
              type="button"
              className="add-benefit-button standard-button"
              onClick={handleAddBenefit}
            >
              Adicionar Benefício
            </button>
          </div>
        </label>
        <label>
          Descrição Completa da Vaga:
          <textarea
            placeholder="Descrição Completa"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </label>
        <label className="checkbox-container">
          <input
            type="checkbox"
            id="ocultar-nome-empresa"
            checked={hideCompanyName}
            onChange={() => setHideCompanyName(!hideCompanyName)}
          />
          <label htmlFor="ocultar-nome-empresa">
            Deseja Ocultar Nome da Empresa Contratante
          </label>
        </label>
        <button type="submit" className="standard-button">
          Publicar Vaga
        </button>
      </form>
    </div>
  );
};

export default CadastrarVagas;
