// Card.js
import React from 'react';
import '../css/Cards.css';

const Card = ({ title, imageUrl }) => {
  return (
    <div className="d-steam-card-wrapper">
      <div className="d-steam-card" style={{ backgroundImage: `url(${imageUrl})` }}>
				<div className="card-title">{title}</div>
      </div>
    </div>
  );
};

export default Card;