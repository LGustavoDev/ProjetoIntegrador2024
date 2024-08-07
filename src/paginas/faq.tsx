import React, { useState } from "react";
import "../estilo/faq.css"; // Estilos personalizados
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faUser,
  faEnvelope,
  faQuestionCircle,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log("Formulário enviado:", formData);
  };

  const faqsCandidates = [
    {
      question: "Como posso me cadastrar?",
      answer:
        "Você pode se cadastrar clicando no botão 'Cadastrar' na página inicial e preenchendo o formulário.",
      icon: faUser,
    },
    {
      question: "Como posso buscar vagas?",
      answer:
        "Utilize a barra de pesquisa e os filtros disponíveis para encontrar vagas que se encaixem no seu perfil.",
      icon: faQuestionCircle,
    },
    {
      question: "Como posso atualizar meu perfil?",
      answer:
        "Acesse sua conta e vá até a seção 'Perfil' para editar suas informações e currículos.",
      icon: faUser,
    },
    {
      question: "Como posso entrar em contato com o suporte?",
      answer:
        "Você pode entrar em contato conosco através do formulário nesta página ou pelo email suporte@trampofacil.com.",
      icon: faEnvelope,
    },
  ];

  const faqsCompanies = [
    {
      question: "Como posso anunciar uma vaga?",
      answer:
        "Após se cadastrar como empresa, você pode acessar o painel e clicar em 'Anunciar Vaga'.",
      icon: faBuilding,
    },
    {
      question: "Como posso visualizar as candidaturas?",
      answer:
        "No painel de controle, você encontrará todas as candidaturas enviadas para suas vagas.",
      icon: faQuestionCircle,
    },
    {
      question: "Posso editar uma vaga já publicada?",
      answer:
        "Sim, você pode editar ou remover suas vagas a qualquer momento através do painel.",
      icon: faBuilding,
    },
    {
      question: "Como funciona o sistema de avaliação de candidatos?",
      answer:
        "Você pode avaliar candidatos diretamente no painel, deixando feedback e notas sobre cada um.",
      icon: faBuilding,
    },
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="support-page">
      <h1>Suporte</h1>
      <p>
        Estamos aqui para ajudar! Se você tiver alguma dúvida, entre em contato
        conosco.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Seu Nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Seu Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Sua Mensagem"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>

      <div>
        <h1>Perguntas Frequentes (FAQ)</h1>
      </div>

      <div className="faq-images">
        <div className="faq-image">
          <img
            src="https://image.freepik.com/free-photo/customer-support-concept_1150-16840.jpg"
            alt="Imagem de suporte 1"
          />
        </div>
        <div className="faq-image">
          <img
            src="https://image.freepik.com/free-photo/helpful-mature-woman-using-laptop-with-headset-home-office_1150-18469.jpg"
            alt="Imagem de suporte 2"
          />
        </div>
      </div>

      <div className="faq-section">
        <div className="faq-column">
          <h1>Para Candidatos</h1>
          {faqsCandidates.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${expandedFAQ === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <FontAwesomeIcon icon={faq.icon} className="faq-icon" />
                <h4>{faq.question}</h4>
                <FontAwesomeIcon
                  icon={expandedFAQ === index ? faChevronUp : faChevronDown}
                  className="faq-toggle-icon"
                />
              </div>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="faq-column">
          <h1>Para Empresas</h1>
          {faqsCompanies.map((faq, index) => (
            <div
              key={index + faqsCandidates.length}
              className={`faq-item ${
                expandedFAQ === index + faqsCandidates.length ? "active" : ""
              }`}
              onClick={() => toggleFAQ(index + faqsCandidates.length)}
            >
              <div className="faq-question">
                <FontAwesomeIcon icon={faq.icon} className="faq-icon" />
                <h4>{faq.question}</h4>
                <FontAwesomeIcon
                  icon={
                    expandedFAQ === index + faqsCandidates.length
                      ? faChevronUp
                      : faChevronDown
                  }
                  className="faq-toggle-icon"
                />
              </div>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
