import React from "react";
import ConsultantCard from "./ConsultantCard";
import "./consultores.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img
          src="./public/images/icons/rhout-round.jpg"
          alt="RHOUT"
          className="logo"
        />
        <h1>CONSULTORES</h1>
      </header>
      
      <div className="consultant-list">
        <ConsultantCard
          name="Ketlin Mendes"
          image="https://via.placeholder.com/150" // Coloque a URL da imagem da Ketlin aqui
        />
        <ConsultantCard
          name="Ketlin Mendes"
          image="https://via.placeholder.com/150" // Pode alterar para outra imagem se necessário
        />
      </div>
    </div>
  );
}

export default App;
