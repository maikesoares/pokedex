import React, { useContext, useEffect, useState } from 'react';
import {
  fetchDetailsAbilities,
  fetchPokemonDataName,
} from '../../services/fetchPokemonDataName';
import { Link, useParams } from 'react-router-dom';
import { Header } from '../header';
import { Footer } from '../footer';
import { ThemeTogglerButton } from '../Theme-toggler-button';
import { ThemeContext } from '../../contexts/theme-context';

const PokemonDetailsCard = () => {
  const [details, setDetails] = useState([]);
  const [ability, setAbility] = useState([]);
  const { theme } = useContext(ThemeContext);
  const { name } = useParams();

  useEffect(() => {
    async function fetchDataDetails() {
      const data = await fetchPokemonDataName(name);
      setDetails(data);
    }

    fetchDataDetails();
  }, [name]);

  useEffect(() => {
    async function fetchDataAbility() {
      const data = await fetchDetailsAbilities(name);
      setAbility(data);
    }

    fetchDataAbility();
  }, [name]);

  return (
    <>
      <Header />
      <main
        className="container-details"
        style={{ color: theme.color, backgroundColor: theme.background }}
      >
        <ThemeTogglerButton />
        <div className="container-btn-home">
          <Link to={'/'}>
            <img src="../../src/images/btn-home.png" />
          </Link>
        </div>
        <div className="details">
          <section className="first-details">
            <h1>{details.name}</h1>
            <h3>{details.types && details.types.join(' | ')}</h3>
            <p>XP: {details.xp}</p>
            <div className="images">
              <img src={details.image_front} alt={details.name} />
              <img src={details.image_back} alt={details.name} />
            </div>
          </section>
          <section className="second-details">
            <h2>Variações: </h2>
            <div className="images">
              <img src={details.image_front_shiny} alt={details.name} />
              <img src={details.image_back_shiny} alt={details.name} />
            </div>
            <h2>Movimentos: </h2>
            <ul>
              {details.moves &&
                details.moves.map((move, index) => {
                  return <li key={index}>{move.move.name}</li>;
                })}
            </ul>
            <section className="habilidades">
              <h2>Habilidades:</h2>
              <ul>
                <li>
                  <h2>{details.ability1}</h2>
                  <p>{ability.descricao1}</p>
                </li>
                <li>
                  <h2>{details.ability2}</h2>
                  <p>{ability.descricao2}</p>
                </li>
              </ul>
            </section>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export { PokemonDetailsCard };
