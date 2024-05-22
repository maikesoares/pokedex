import axios from 'axios';

export const fetchPokemonData = async (limit) => {
  const baseUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`;
  try {
    const response = await axios.get(baseUrl);
    const data = response.data.results;
    const pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        const res = await axios.get(pokemon.url);
        return {
          name: pokemon.name,
          image: res.data.sprites.front_default,
          types: res.data.types.map((type) => type.type.name),
        };
      }),
    );
    return pokemonData;
  } catch (error) {
    console.error('Erro ao buscar pokemons', error);
    return error;
  }
};
