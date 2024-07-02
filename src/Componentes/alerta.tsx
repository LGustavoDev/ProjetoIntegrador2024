// Alerta.tsx
import React, { useState, useEffect } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import '../estilo/alerta.css';

interface AlertaProps {
  onClose: () => void;
}

const Alerta: React.FC<AlertaProps> = ({ onClose }) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    // Reduzindo o tempo de simulação para 0.5 segundos
    setTimeout(() => {
      const vagas = 3; // Simulação de dados recebidos do backend
      const area = "ADM";
      setMessage(`Você tem ${vagas} novas vagas ${area}.`);
      setVisible(true); // Exibe o alerta quando os dados estão prontos
    }, 500); // Reduzindo para 0.5 segundos
  }, []);

  const handleButtonClick = () => {
    setVisible(false); // Esconde o alerta ao clicar no botão
    onClose(); // Chama a função de fechar o alerta
  };

  return (
    <div className={`notification ${visible ? 'show' : ''} menu-alert`}>
      <div className="notification-icon">
        <FaExclamationTriangle />
      </div>
      <div className="notification-content">
        <h3>Nova Vagas</h3>
        <p>{message}</p>
        <button onClick={handleButtonClick}>VER</button>
      </div>
    </div>
  );
}

export default Alerta;
