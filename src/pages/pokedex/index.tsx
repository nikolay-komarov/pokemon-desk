import React from 'react';

import Layout from '../../components/layout';
import Heading, { HeadingSize } from '../../components/heading';
import PokemonCard from '../../components/pokemon-card';

import s from './pokedex.module.scss';

import { IPokemon } from '../../interfaces/pokemon';

import pokemons from '../../mocks/pokemon';

const PokedexPage = () => {
  return (
    <div className={s.root}>
      <Layout>
        <Heading size={HeadingSize.h3} className={s.pageHeader}>
          800 <b>Pokemons</b> for you to choose your favorite
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
