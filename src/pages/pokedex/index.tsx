import React, {useEffect, useState} from 'react';

import Layout from '../../components/layout';
import Heading, {HeadingSize} from '../../components/heading';
import PokemonCard from '../../components/pokemon-card';

import s from './pokedex.module.scss';
import config from "../../config";

import {IPokemon} from '../../interfaces/pokemon';

const usePokemons = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      const url = `${config.client.server.protocol}://${config.client.server.host}/${config.client.endpoint.getPokemons.uri.pathname}`;

      try {
        const response = await fetch(url);
        const result = await response.json();

        setData(data);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  }
}

const PokedexPage = () => {
  const {
    data,
    isLoading,
    isError,
  } = usePokemons();

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
          {data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div className={s.pokemonGallery}>
          {
            data.pokemons.map((item: IPokemon) => {
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
