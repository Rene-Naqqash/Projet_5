import React from 'react';
import '../styles/card.scss';
import { useNavigate } from 'react-router-dom';

function Card({ img, title, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/logement/${id}`); // Redirige vers la page du logement avec l'ID correspondant
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={img} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
    </div>
  );
}

export default Card;
