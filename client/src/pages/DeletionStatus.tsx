import React from 'react';
import { useLocation } from "wouter";

const DeletionStatus: React.FC = () => {
  const [location] = useLocation();
  const params = new URLSearchParams(location.split('?')[1]);
  const id = params.get("id");

  return (
    <div>
      <h1>Status da Exclusão de Dados</h1>
      {id ? (
        <p>Solicitação de exclusão em processamento para o ID: {id}</p>
      ) : (
        <p>ID de solicitação não informado.</p>
      )}
    </div>
  );
};

export default DeletionStatus;