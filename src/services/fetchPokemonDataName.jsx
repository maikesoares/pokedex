import axios from 'axios';

export const fetchPokemonDataName = async (name) => {
  const baseUrl = `https://pokeapi.co/api/v2/pokemon`;
  try {
    const response = await axios.get(`${baseUrl}/${name}`);
    const pokemon = await response.data;

    return {
      name: pokemon.name,
      order: pokemon.order,
      image_front: pokemon.sprites.front_default,
      image_back: pokemon.sprites.back_default,
      image_front_shiny: pokemon.sprites.front_shiny,
      image_back_shiny: pokemon.sprites.back_shiny,
      types: pokemon.types.map((type) => type.type.name),
      xp: pokemon.base_experience,
      moves: pokemon.moves,
      ability1: pokemon.abilities[0].ability.name,
      ability2: pokemon.abilities[1].ability.name,
    };
  } catch (error) {
    console.error('Error fetching Pokémon details:', error);
    throw error;
  }
};

export const fetchDetailsAbilities = async (name) => {
  const baseUrl = `https://pokeapi.co/api/v2/pokemon`;
  try {
    const response = await axios.get(`${baseUrl}/${name}`);
    const pokemon = response.data.abilities.map((ability) => ability.ability);
    const abilitiesData = await Promise.all(
      pokemon.map(async (abilities) => await axios.get(abilities.url)),
    );
    const desc = abilitiesData.map((ability) => ability.data.effect_entries[0]);
    return {
      descricao1: desc[0].effect,
      descricao2: desc[1].effect,
    };
  } catch (error) {
    console.error('Error fetching Pokémon details:', error);
    throw error;
  }
};
