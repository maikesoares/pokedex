import React from 'react';

const Input = ({ pokemonSearch }) => {
  return (
    <div className="form">
      <form>
        <input
          type="text"
          placeholder="Search Pokemon"
          onChange={(e) => pokemonSearch(e.target.value)}
        />
        <label>🔍</label>
      </form>
    </div>
  );
};

export { Input };
