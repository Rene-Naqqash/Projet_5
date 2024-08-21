/** @format */

import React from 'react';
import '../styles/card.scss';

function Card({ img, title, id }) {
  return (
    <div className="card">
      <a href={`/logement/${id}`}>
        <img src={img} alt={title} className="card-image" />
        <h3 className="card-title">{title}</h3>
      </a>
    </div>
  );
}

export default Card;
