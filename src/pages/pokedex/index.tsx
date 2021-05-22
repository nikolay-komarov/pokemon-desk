import React, {useEffect, useState} from 'react';

import Layout from '../../components/layout';
import Heading, {HeadingSize} from '../../components/heading';
import PokemonCard from '../../components/pokemon-card';

import s from './pokedex.module.scss';

import {IPokemon} from '../../interfaces/pokemon';

const PokedexPage = () => {
  const [totalPokemons, setTotalPokemons] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch('http://zar.hosthot.ru/api/v1/pokemons')
      .then(res => res.json())
      .then(data => {
        setTotalPokemons(data.total);
        setPokemons(data.pokemons);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Heading size={HeadingSize.h4}>Loading...</Heading>
  }

  if (isError) {
    return <Heading size={HeadingSize.h4}>Something wrong...</Heading>
  }

  return (
    <div className={s.root}>
      <Layout>
        <Heading size={HeadingSize.h3} className={s.pageHeader}>
          {totalPokemons} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div className={s.pokemonGallery}>
          {
            pokemons.map((item: IPokemon) => {
              return (
                <div className={s.pokemonCardPreview} key={item.name}>
                  <PokemonCard stats={item.stats} types={item.types} img={item.img} name={item.name} />
                </div>
              );
            })
          }
        </div>
      </Layout>
    </div>
  );
};

export default PokedexPage;
