"use client"
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
          name="Consultora Ketlin Mendes"
          image="/images/vendedores/vendedoraket.png" // URL da imagem da Ketlin
          whatsappLink="https://api.whatsapp.com/send?phone=5514997678149" // Substitua pelo número do WhatsApp
        />
        <ConsultantCard
          name="Consultor Andrew"
          image="/images/vendedores/vendedorandrew.png" // Outra imagem, pode ser alterada se necessário
          whatsappLink="https://api.whatsapp.com/send?phone=5514998018264" // Substitua pelo número do WhatsApp
        />
        <ConsultantCard
          name="Consultora Isabela Gonçalves"
          image="/images/vendedores/vendedoraisabela.png" // Outra imagem, pode ser alterada se necessário
          whatsappLink="https://api.whatsapp.com/send?phone=5514997242613" // Substitua pelo número do WhatsApp
        />
          <ConsultantCard
          name="Consultor Filipe Melo"
          image="/images/vendedores/vendedorfilipi.png" // Outra imagem, pode ser alterada se necessário
          whatsappLink="https://api.whatsapp.com/send?phone=5514998268128" // Substitua pelo número do WhatsApp
        />
           <ConsultantCard
          name="Consultor Gabriel Maia"
          image="/images/vendedores/vendedorgabriel.png" // Outra imagem, pode ser alterada se necessário
          whatsappLink="https://api.whatsapp.com/send?phone=5514996463319" // Substitua pelo número do WhatsApp
        />
        <ConsultantCard
          name="Consultora Suellen"
          image="/images/vendedores/vendedorasuellen.png" // Outra imagem, pode ser alterada se necessário
          whatsappLink="https://api.whatsapp.com/send?phone=5514997093314" // Substitua pelo número do WhatsApp
        />
           <ConsultantCard
          name="Técnico Kevin"
          image="/images/vendedores/tecnico.png" // Outra imagem, pode ser alterada se necessário
          whatsappLink="https://api.whatsapp.com/send?phone=5514997056625" // Substitua pelo número do WhatsApp
        />
      </div>
    </div>
  );
}

export default Consultores;
