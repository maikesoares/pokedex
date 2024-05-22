import { useEffect, useState } from 'react';
import { PokemonCard } from '../pokemonCard';
import { fetchPokemonData } from '../../services/fetchPokemonData';
import { Button } from '../button';
import { Header } from '../header';
import { ThemeContext } from '../../contexts/theme-context';
import React, { useContext } from 'react';
import { ThemeTogglerButton } from '../Theme-toggler-button';
import { Footer } from '../footer';
import { Input } from '../input';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [limit, setLimit] = useState(0);
  const { theme } = useContext(ThemeContext);

  const fetchPokemon = async () => {
    setIsloading(true);
    try {
      const pokemonNewList = await fetchPokemonData(limit + 10);
      setPokemonList([...pokemonNewList]);
      setLimit(limit + 10);
    } catch (error) {
      console.error('Erro ao buscar pokemons', error);
    }

    setIsloading(false);
  };

  const pokemonListData = async () => {
    const data = await fetchPokemonData(limit);
    setPokemonList(data);
  };

  const pokemonSearch = (name) => {
    const search = [];
    if (name === '') {
      return pokemonListData();
    }
    for (let i in pokemonList) {
      if (pokemonList[i].name.includes(name)) {
        search.push(pokemonList[i]);
      }
      setPokemonList(search);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <>
      <Header />
      <main
        className="container"
        style={{ color: theme.color, backgroundColor: theme.background }}
      >
        <ThemeTogglerButton />
        <Input pokemonSearch={pokemonSearch} />
        <section className="container-cards">
          {pokemonList.map((pokemon, index) => {
            return <PokemonCard key={index} {...pokemon} />;
          })}
        </section>
        <Button onClick={fetchPokemon} isLoading={isLoading} />
      </main>
      <Footer />
    </>
  );
};

export { PokemonList };
