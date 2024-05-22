import React from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({ name, image, types }) => {
  return (
    <Link to={`/details/${name}`}>
      <div className="pokemon-card" key={name}>
        <img src={image} alt={name} />
        <h1>{name}</h1>
        <p>{types.join(' | ')}</p>
      </div>
    </Link>
  );
};

export { PokemonCard };
