import React, { useEffect } from "react";
import ConsultantCard from "./ConsultantCard";
import "./consultores.css";

function Consultores() {
  // Auto scroll ao topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);  // Isso faz o scroll automático para o topo
  }, []);

  return (
    <div className="consultores">
      <header className="consultores-header">
        {/* Retângulo cinza escuro */}
        <div className="header-background"></div>
        <img
          src="/images/icons/rhout-round.jpg"  // Atualização do caminho da imagem
          alt="RHOUT"
          className="logo"
        />
        <h1>Consultores</h1>
      </header>
      
      <div className="consultant-list">
        <ConsultantCard
          name="Ketlin Mendes"
          image="https://via.placeholder.com/150" // URL da imagem da Ketlin
          whatsappLink="https://api.whatsapp.com/send?phone=55XXXXXXXXXX" // Substitua pelo número do WhatsApp
        />
        <ConsultantCard
          name="Outro Consultor"
          image="https://via.placeholder.com/150" // Outra imagem, pode ser alterada se necessário
          whatsappLink="https://api.whatsapp.com/send?phone=55XXXXXXXXXX" // Substitua pelo número do WhatsApp
        />
      </div>
    </div>
  );
}

export default Consultores;
