import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PokemonHome } from './pokemonHome';
import { PokemonDetails } from './pokemonDetails';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PokemonHome />} />
        <Route exact path="/details/:name" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
