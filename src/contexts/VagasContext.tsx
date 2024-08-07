// VagasContext.tsx
import React, { createContext, useState, ReactNode } from "react";

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

interface VagasContextType {
  vagas: Vaga[];
  adicionarVaga: (vaga: Vaga) => void;
  editarVaga: (vagaEditada: Vaga) => void;
  removerVaga: (id: number) => void;
}

export const VagasContext = createContext<VagasContextType>({
  vagas: [],
  adicionarVaga: () => {},
  editarVaga: () => {},
  removerVaga: () => {},
});

export const VagasProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [vagas, setVagas] = useState<Vaga[]>([]);

  const adicionarVaga = (vaga: Vaga) => {
    setVagas([...vagas, vaga]);
  };

  const editarVaga = (vagaEditada: Vaga) => {
    setVagas(
      vagas.map((vaga) => (vaga.id === vagaEditada.id ? vagaEditada : vaga))
    );
  };

  const removerVaga = (id: number) => {
    setVagas(vagas.filter((vaga) => vaga.id !== id));
  };

  return (
    <VagasContext.Provider
      value={{ vagas, adicionarVaga, editarVaga, removerVaga }}
    >
      {children}
    </VagasContext.Provider>
  );
};
