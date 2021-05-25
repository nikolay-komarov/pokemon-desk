import React, { useState } from 'react';

import Layout from '../../components/layout';
import Heading, { HeadingSize } from '../../components/heading';
import PokemonCard from '../../components/pokemon-card';

import s from './pokedex.module.scss';

import { IPokemon, IPokemonsData } from '../../interfaces/pokemon';
import useData from '../../hooks/getData';

interface IQuery {
  name?: string;
}

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});

  const { data, isLoading, isError } = useData<IPokemonsData>('getPokemons', query, [searchValue]);

  const handleSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
    setQuery((prevState: IQuery) => ({
      ...prevState,
      name: evt.target.value,
    }));
  };

  if (isLoading) {
    return <Heading size={HeadingSize.h4}>Loading...</Heading>;
  }

  if (isError) {
    return <Heading size={HeadingSize.h4}>Something wrong...</Heading>;
  }

  return (
    <div className={s.root}>
      <Layout>
        <Heading size={HeadingSize.h3} className={s.pageHeader}>
          {!isLoading && data && data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>

        <input type="text" value={searchValue} onChange={handleSearchChange} />

        <div className={s.pokemonGallery}>
          {!isLoading &&
            data &&
            data.pokemons.map((item: IPokemon) => {
              return (
                <div className={s.pokemonCardPreview} key={item.name}>
                  <PokemonCard stats={item.stats} types={item.types} img={item.img} name={item.name} />
                </div>
              );
            })}
        </div>
      </Layout>
    </div>
  );
};

export default PokedexPage;
