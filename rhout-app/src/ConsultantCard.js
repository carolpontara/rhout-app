import React from "react";
import "./ConsultantCard.css";

function ConsultantCard({ name, image }) {
  return (
    <div className="consultant-card">
      <img src={image} alt={name} className="consultant-image" />
      <p>{name}</p>
    </div>
  );
}

export default ConsultantCard;
