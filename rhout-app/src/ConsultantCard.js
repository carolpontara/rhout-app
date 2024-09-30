"use client"
import React from "react";
import "./ConsultantCard.css";

function ConsultantCard({ name, image, whatsappLink }) {
  return (
    <div className="consultant-card" onClick={() => window.open(whatsappLink, "_blank")}>
      <img src={image} alt={name} className="consultant-image" />
      <p>{name}</p>
    </div>
  );
}

export default ConsultantCard;
